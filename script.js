var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 0] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 1] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 2] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 3] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 4] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 5] = "Saturday";
    DaysOfWeek[DaysOfWeek["Sunday"] = 6] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
console.log(DaysOfWeek[0]);
console.log(DaysOfWeek[1]);
console.log(DaysOfWeek[2]);
console.log(DaysOfWeek[3]);
console.log(DaysOfWeek[4]);
console.log(DaysOfWeek[5]);
console.log(DaysOfWeek[6]);
var Months;
(function (Months) {
    Months[Months["January"] = 1] = "January";
    Months[Months["February"] = 2] = "February";
    Months[Months["March"] = 3] = "March";
    Months[Months["April"] = 4] = "April";
    Months[Months["May"] = 5] = "May";
    Months[Months["June"] = 6] = "June";
    Months[Months["July"] = 7] = "July";
    Months[Months["August"] = 8] = "August";
    Months[Months["September"] = 9] = "September";
    Months[Months["October"] = 10] = "October";
    Months[Months["November"] = 11] = "November";
    Months[Months["December"] = 12] = "December";
})(Months || (Months = {}));
function getMonthName(month) {
    return Months[month];
}
console.log(getMonthName(12));
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Blue"] = 1] = "Blue";
    Colors[Colors["Green"] = 2] = "Green";
})(Colors || (Colors = {}));
function getColor(color) {
    for (var key in Colors) {
        if (Colors[key] === color) {
            return "\u0412\u044B \u0432\u044B\u0431\u0440\u0430\u043B\u0438 ".concat(Colors[key], " \u0446\u0432\u0435\u0442");
        }
    }
    ;
}
console.log(getColor('Green'));
console.log(getColor('Orange'));
var Planets;
(function (Planets) {
    Planets[Planets["\u041C\u0435\u0440\u043A\u0443\u0440\u0438\u0439"] = 0] = "\u041C\u0435\u0440\u043A\u0443\u0440\u0438\u0439";
    Planets[Planets["\u0412\u0435\u043D\u0435\u0440\u0430"] = 1] = "\u0412\u0435\u043D\u0435\u0440\u0430";
    Planets[Planets["\u0417\u0435\u043C\u043B\u044F"] = 2] = "\u0417\u0435\u043C\u043B\u044F";
    Planets[Planets["\u041C\u0430\u0440\u0441"] = 3] = "\u041C\u0430\u0440\u0441";
})(Planets || (Planets = {}));
function getPlanet(planet) {
    return Planets[planet];
}
console.log(getPlanet('Земля'));
var Fruits;
(function (Fruits) {
    Fruits[Fruits["Apple"] = 0] = "Apple";
    Fruits[Fruits["Banana"] = 1] = "Banana";
    Fruits[Fruits["Orange"] = 2] = "Orange";
    Fruits[Fruits["Pineapple"] = 3] = "Pineapple";
    Fruits[Fruits["Grapes"] = 4] = "Grapes";
})(Fruits || (Fruits = {}));
function isTasty(fruit) {
    if (Object.keys(Fruits).includes(fruit)) {
        return "".concat(fruit, " is tasty");
    }
    else {
        return "".concat(fruit, " is not tasty");
    }
}
console.log(isTasty('Orange'));
console.log(isTasty('Limon'));
