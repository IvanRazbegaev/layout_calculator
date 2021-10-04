'use strict';

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

let fullPrice = (screenPrice + servicePrice1 + servicePrice2);

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * rollback/100));

fullPrice >= 30000 ? console.log("Даем скидку 10%") :
    fullPrice >= 15000 ? console.log("Даем скидку в 5%") :
        fullPrice < 15000 && fullPrice >= 0 ?
            console.log("Скидка не предусмотрена") : console.log("Что-то пошло не так...")



