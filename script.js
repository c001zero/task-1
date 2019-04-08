"uses strict";
let money,
    time;
money = prompt("Ваш бюджет на месяц?", '');
time = prompt("Введите дату в формате YYYY-MM-DD", '');
let expenses = {},
    optionalExpenses = {};
for (let i = 0; i < 2; i++){
    expenses.answer1 = prompt("Введите обязательную статью расходов в этом месяце", '');
    expenses.answer2 = prompt("Во сколько обойдется?", '');
}
let appData = {
    'money': money,
    'timeData': time,
    'expenses': expenses,
    'optionalExpenses': optionalExpenses
};

console.log(appData.money + "\n" + appData.timeData);