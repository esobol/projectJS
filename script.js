"use strict"

let answerBudget = prompt('Ваш бюджет на месяц?');
console.log(answerBudget);

let date = prompt('Введите дату в формате YYYY-MM-DD');


let expenses = prompt('Введите обязательную статью расходов в этом месяце');
let optionalExpenses = prompt('Во сколько обойдется?');

var answers = {quest : optionalExpenses};
console.log(answers);

var time = {time : date};
console.log(answers);

var answers2 = {budget : answerBudget};

console.log(answers2);

alert('you spend per day ' + answerBudget/30);

