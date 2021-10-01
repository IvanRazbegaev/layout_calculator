const title = "";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 10;
let rollback = 20;
let fullPrice = 100;
let adaptive = true;

console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани,`,
    `Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback/100));

