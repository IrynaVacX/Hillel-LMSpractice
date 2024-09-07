let userYear = +prompt("Ваш рік народження?");
let userCity = prompt("В якому місті ви живите?");
let userSport = prompt("Який ваш улюблений вид спорту?");

let yearStr;
let cityStr;
let sportStr;

if(!userYear || isNaN(userYear)) {
    yearStr = "Шкода, що Ви не захотіли ввести свою дату народження :с";
}
else {
    yearStr = `Ваш вік - ${new Date().getFullYear() - userYear}`;
}
if(!userCity) {
    cityStr = "Шкода, що Ви не захотіли ввести місто в якому ви живите :с";
}
else {
    switch(userCity.toLowerCase()) {
        case "київ":
            cityStr = "Ти живеш у столиці України";
            break;
        case "вашингтон":
            cityStr = "Ти живеш у столиці США";
            break;
        case "лондон":
            cityStr = "Ти живеш у столиці Англії";
            break;
        default:
            cityStr = `Ти живеш у місті ${userCity}`;
    }
}
if(!userSport) {
    sportStr = "Шкода, що Ви не захотіли ввести ваш улюблений вид спорту :с";
}
else {
    switch(userSport.toLowerCase()) {
        case "фехтування":
            sportStr = "Круто! Хочеш стати Мате Тамаш Кох?";
            break;
        case "дзюдо":
            sportStr = "Круто! Хочеш стати Сергій Балабан";
            break;
        case "стрільба з лука":
            sportStr = "Круто! Хочеш стати Мете Газоз";
            break;
        default:
            sportStr = "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧";
    }
}
alert(yearStr + "\n" + cityStr + "\n" + sportStr);