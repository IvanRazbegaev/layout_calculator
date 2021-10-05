'use strict';

//блок объявления переменных
const title = prompt("Как называется наш проект?");
const screens = prompt("Какие типы экранов нужно разработать?",
    "Простые, Сложные, Интерактивные");
const screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
const rollback = 20;
const adaptive = !!prompt("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
let fullPrice, allServicePrices, servicePercentPrice;

//функциональный блок

const getAllServicePrices = function() {
    allServicePrices = servicePrice1 + servicePrice2;
    return allServicePrices;
};

function getFullPrice() {
    fullPrice = screenPrice + allServicePrices;
    return fullPrice;
};

const getTitle = function () {
    return title.trim().split("").map((value, index) => {
        return index == 0 ? value.toUpperCase() : value.toLowerCase();
    }).join("");
};

const getServicePercentPrices = function () {
    servicePercentPrice = fullPrice - (fullPrice * rollback/100);
    return servicePercentPrice
}



// мусорный блок

console.log(screens.split(""));

console.log(getAllServicePrices());
console.log(getFullPrice());
console.log(getTitle());
console.log(getServicePercentPrices());

fullPrice >= 30000 ? console.log("Даем скидку 10%") :
    fullPrice >= 15000 ? console.log("Даем скидку в 5%") :
        fullPrice < 15000 && fullPrice >= 0 ?
            console.log("Скидка не предусмотрена") : console.log("Что-то пошло не так...");