'use strict';

//блок объявления переменных

//document.getElementById('hello').innerHTML = html;

let title;
let screens;
let screenPrice;
let adaptive;
let fullPrice;
let servicePercentPrice;
let allServicePrices;
const rollback = 20;
let service1;
let service2;
let servicePrice;

//блок описания функций

const isNumber = function(num) {

    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
    title = prompt("Как называется наш проект?", "Калькулятор верстки");
    screens = prompt("Какие типы экранов нужно разработать?",
        "Простые, Сложные, Интерактивные");
    do{
        screenPrice = +prompt("Сколько будет стоить данная работа?");

    } while (!isNumber(screenPrice));

    adaptive = confirm("Нужен ли адаптив на сайте?");
}

const getAllServicePrices = function() {
    let sum = 0;
    for (let i = 0; i < 2; i++){
        if (i === 0){
            service1 = prompt("Какой дополнительный тип услуги нужен?");
        } else if (i === 1){
            service2 = prompt("Какой дополнительный тип услуги нужен?");
        };
        do {
            servicePrice = +prompt("Сколько это будет стоить?");
        } while (!isNumber(servicePrice));

        sum += servicePrice;
    }
    return sum;
};

function getFullPrice() {
    return screenPrice + allServicePrices;
};

const getTitle = function () {
    return title.trim().split("").map((value, index) => {
        return index == 0 ? value.toUpperCase() : value.toLowerCase();
    }).join("");
};

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * rollback/100);
}

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
    if(price >= 30000){
        return "Даем скидку 10%";
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%";
    } else if (price >= 0 && price < 15000) {
        return "Скидка не предусмотрена";
    } else {
        return "Что-то пошло не так...";
    }
}

// блок функционала

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

// мусорный блок

console.log(allServicePrices);

console.log(getRollbackMessage(fullPrice));
console.log(screens.split(", "));
console.log(getServicePercentPrices());
