'use strict';

//блок объявления переменных

let appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    rollback: 20,
    service1: '',
    service2: '',
    servicePrice: 0,
    asking: function () {
        appData.title = prompt("Как называется наш проект?", "Калькулятор верстки");
        appData.screens = prompt("Какие типы экранов нужно разработать?",
            "Простые, Сложные, Интерактивные");
        do{
            appData.screenPrice = +prompt("Сколько будет стоить данная работа?");

        } while (!this.isNumber(appData.screenPrice));

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    isNumber: function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    getAllServicePrices: function() {
        let sum = 0;
        for (let i = 0; i < 2; i++){
            if (i === 0){
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
            } else if (i === 1){
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
            };
            do {
                appData.servicePrice = prompt("Сколько это будет стоить?");
            } while (!this.isNumber(appData.servicePrice));

            sum += +appData.servicePrice;
        }
        return sum;
    },

    getFullPrice: function () {
    return appData.screenPrice + appData.allServicePrices;
    },
    getTitle: function () {
        return appData.title.trim().split("").map((value, index) => {
            return index == 0 ? value.toUpperCase() : value.toLowerCase();
        }).join("");
    },
    getServicePercentPrices: function () {
        return appData.fullPrice - (appData.fullPrice * appData.rollback/100);
    },
    getRollbackMessage: function (price) {
        if(price >= 30000){
            return "Даем скидку 10%";
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5%";
        } else if (price >= 0 && price < 15000) {
            return "Скидка не предусмотрена";
        } else {
            return "Что-то пошло не так...";
        }
    },
    start: function (){
        this.asking();
        this.allServicePrices = this.getAllServicePrices();
        this.fullPrice = this.getFullPrice();
        this.servicePercentPrice = this.getServicePercentPrices();
        this.title = this.getTitle();
        this.logger();
    },
    logger: function () {
        for (let key in this){
            console.log(key);
        };
    },
};
//блок описания функций
// блок функционала
appData.start();
// мусорный блок

