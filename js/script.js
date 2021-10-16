'use strict';
//блок объявления переменных

// Получаем title
const title = document.getElementsByTagName("h1")[0];

//Получаем кнопки из коллекции
let cancel = document.getElementsByClassName("handler_btn")[1];
let calculate = document.getElementsByClassName("handler_btn")[0];

// Получить "+" через querySelector
let plusSigh = document.querySelector(".screen-btn");

// Получить все элементы с классом other-items в 2 переменные, 1 - percent, 2 - number
let percentItems = document.querySelectorAll(".other-items.percent");
let numberItems = document.querySelectorAll(".other-items.number");

//Получить input type=range через его родителя с классом rollback
let inputRangeValue = document.querySelector(".rollback input[type = range]");

//Получить span с классом range-value через его родителя с классом rollback
let spanRangeValue = document.querySelector(".rollback span.range-value");

//Получить все инпуты с классом total-input справа через метод getElementsByClassName
let total = document.getElementsByClassName("total-input")[0];
let totalCount = document.getElementsByClassName("total-input")[1];
let totalCountOther = document.getElementsByClassName("total-input")[2];
let fullTotalCount = document.getElementsByClassName("total-input")[3];
let totalCountRollback = document.getElementsByClassName("total-input")[4];

let allScreens = document.querySelectorAll(".screen");

let appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    screensCount: 0,
    adaptive: true,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    rollback: 20,
    servicesPercent: {},
    servicesNumber: {},
    init: function () {
        this.addTitle();
        plusSigh.addEventListener('click', this.addScreenBlock);
        calculate.addEventListener("click", function () {
            allScreens = document.querySelectorAll(".screen");
            let count = 0;

            allScreens.forEach((screen) => {
                const select = screen.querySelector("select");
                const input = screen.querySelector("input");

                if (select.value && input.value){
                    count++
                }
            });
            if (count === allScreens.length){
                appData.start();
            } else alert ("Заполните поля!")
        });

        inputRangeValue.addEventListener("input", function (e) {
            spanRangeValue.textContent = e.target.value;
            appData.rollback = +e.target.value;
            if (appData.fullPrice) {
                appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * appData.rollback / 100);
                totalCountRollback.value = appData.servicePercentPrice;
            }
        })
    },
    addTitle: function () {
        document.title = title.textContent;
    },
    addScreens: function () {
        allScreens = document.querySelectorAll(".screen");
        allScreens.forEach((screen, index) => {
            const select = screen.querySelector("select");
            const input = screen.querySelector("input");
            const selectName = select.options[select.selectedIndex].textContent;

            this.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                screenCount: +input.value
            });
        });
    },
    addScreenBlock: function () {
        allScreens = document.querySelectorAll(".screen");
        const cloneScreen = allScreens[0].cloneNode(true);
        allScreens[allScreens.length-1].after(cloneScreen);
    },
    addServices: function () {
        percentItems.forEach((item)=>{
            const check = item.querySelector("input[type=checkbox]");
            const label = item.querySelector("label");
            const input = item.querySelector("input[type=text]");

            if (check.checked){
                this.servicesPercent[label.textContent] = +input.value;
            }
        });

        numberItems.forEach((item)=>{
            const check = item.querySelector("input[type=checkbox]");
            const label = item.querySelector("label");
            const input = item.querySelector("input[type=text]");

            if (check.checked){
                this.servicesNumber[label.textContent] = +input.value;
            }
        });
    },

    addPrices: function () {
        for (let screen of this.screens){
            this.screenPrice += +screen.price;
            this.screensCount += +screen.screenCount;
        }

        for (let key in this.servicesNumber){
            this.servicePricesNumber
                += this.servicesNumber[key];
        }

        for (let key in this.servicesPercent){
            this.servicePricesPercent
                += this.screenPrice * (this.servicesPercent[key]/100);
        }

        this.fullPrice = this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;
        this.servicePercentPrice = this.fullPrice - (this.fullPrice * this.rollback/100)
    },

    showResult: function () {
        total.value = this.screenPrice;
        totalCount.value = this.screensCount;
        totalCountOther.value = this.servicePricesNumber + this.servicePricesPercent;
        fullTotalCount.value = this.fullPrice;
        totalCountRollback.value = this.servicePercentPrice;

    },
    start: function (){
        appData.addServices()
        appData.addScreens();
        appData.addPrices();
        appData.showResult();
    //     this.logger();
        console.log(appData);
    },
    logger: function () {
        console.log(this.fullPrice);
        console.log(this.servicePercentPrice);
        console.log(this.screens);
    },
};
//блок описания функций
// блок функционала
appData.init();
// мусорный блок
