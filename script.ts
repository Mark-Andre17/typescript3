enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
console.log(DaysOfWeek[0]);
console.log(DaysOfWeek[1]);
console.log(DaysOfWeek[2]);
console.log(DaysOfWeek[3]);
console.log(DaysOfWeek[4]);
console.log(DaysOfWeek[5]);
console.log(DaysOfWeek[6]);
enum Months {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}
function getMonthName(month: number) {
    return Months[month];
}
console.log(getMonthName(12));
enum Colors {
    Red,
    Blue,
    Green
}
function getColor(color: string) {
    for(let key in Colors) {
        if(Colors[key] === color) {
            return `Вы выбрали ${Colors[key]} цвет`;
        }
    };
}
console.log(getColor('Green'));
console.log(getColor('Orange'));
enum Planets {
    Меркурий,
    Венера,
    Земля,
    Марс
}
function getPlanet(planet: string) {
    return Planets[planet];
}
console.log(getPlanet('Земля'));
enum Fruits {
    Apple,
    Banana,
    Orange,
    Pineapple,
    Grapes
}
function isTasty(fruit: string) {
    if((<any>Object).keys(Fruits).includes(fruit)) {
        return `${fruit} is tasty`;
    } else {
        return `${fruit} is not tasty`;
    }
}
console.log(isTasty('Orange'));
console.log(isTasty('Limon'));


