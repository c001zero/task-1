"uses strict";
let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
        budget: money,
        expenses: {},
        optionalExpenses: {},
        income: [],
        timeData: time,
        savings: false,
        chooseExpenses: function () {
            for (let i = 0; i < 2; i++) {
                let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                    b = prompt("Во сколько обойдется?", '');
                    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
                        appData.expenses[a] = b;
                    } else {
                        i--;
                    }
            }
        },
        decectDayBudget: function () {
            appData.moneyPerDay = appData.budget / 30 ;
            alert(appData.moneyPerDay.toFixed());
        },
        checkSavings: function () {
            if (appData.savings) {
                let save = +prompt("Какова сумма накоплений", ''),
                    percent = +prompt("Каков процент", '');
                appData.monthInCome = save / 100 / 12 * percent;
                alert("Доход в месяц: " + appData.monthInCome, '');
            }
        }
};

appData.chooseExpenses();
appData.decectDayBudget();
appData.checkSavings();