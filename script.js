"uses strict";
let money,
    time;
money = prompt("Ваш бюджет на месяц?", '');
time = prompt("Введите дату в формате YYYY-MM-DD", '');
let expenses = [],
    optionalExpenses = {};
for (let i = 0; i < 2; i++){
    expenses.push({'answer1': prompt("Введите обязательную статью расходов в этом месяце", ''),
                'answer2': prompt("Во сколько обойдется?", '')});
}
let appData = {
    'money': money,
    'timeData': time,
    'expenses': expenses,
    'optionalExpenses': optionalExpenses,
    'income': [],
    'savings': false
};
console.log(appData);
let result = (money - expenses[0].answer2 - expenses[1].answer2) / 30;
alert("Ваш бюджет на день: " + result);