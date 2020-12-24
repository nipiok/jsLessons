'use strict';

let startButton = document.getElementById('start'),
   resultFields = document.querySelectorAll('.result-table div'),
   resultFieldsValue = [],
   allInput = document.querySelectorAll('input'),

   expensesButton = document.getElementsByTagName('button')[0],
   optionalExpensesButton = document.getElementsByTagName('button')[1],
   countButton = document.getElementsByTagName('button')[2],
   expensesItems = document.querySelectorAll('.expenses-item'),
   expensesOptionsItems = document.querySelectorAll('.optionalexpenses-item'),
   chooseIncomeField = document.querySelector('.choose-income'),
   savingsChecbox = document.querySelector('#savings'),
   savingsFieldSum = document.querySelector('.choose-sum'),
   savingsFieldPercent = document.querySelector('.choose-percent'),
   dateFieldYear = document.querySelector('.year-value'),
   dateFieldMonth = document.querySelector('.month-value'),
   dateFieldDay = document.querySelector('.day-value');

resultFields.forEach(function(item, key) {
   if (key % 2 > 0 || key == 1) {
      resultFieldsValue.push(item);
   }
});

allInput.forEach(function(item) {
   item.setAttribute('disabled', 'true');
});



let money, time;



startButton.addEventListener('click', function() {
   time = prompt('Введите дату в формате YYYY-MM-DD');

   let timeTest = /\d\d\d\d-\d\d-\d\d/,
      testMounth = new Date(Date.parse(time)).getMonth() + 1,
      testDay = new Date(Date.parse(time)).getDate();
   
   while(!(timeTest.test(time)) || time.length > 10 || testMounth !== testMounth || testDay !== testDay) {
      time = prompt('Введите дату в формате YYYY-MM-DD');
      testMounth = new Date(Date.parse(time)).getMonth() + 1;
      testDay = new Date(Date.parse(time)).getDate();
   }


   money = +prompt('Ваш бюджет на месяц?', '');

   while( isNaN(money) || money == "" || money == null) {
      money = +prompt('Ваш бюджет на месяц?', '');
   }


   appData.budjet = money;
   appData.timeData = time;
   resultFieldsValue[0].textContent = money.toFixed();
   dateFieldYear.value = new Date(Date.parse(time)).getFullYear();
   dateFieldMonth.value = new Date(Date.parse(time)).getMonth() + 1;
   dateFieldDay.value = new Date(Date.parse(time)).getDate();


   allInput.forEach(function(item) {
      item.removeAttribute('disabled', 'disabled');
   });
});



expensesButton.addEventListener('click', function () {
   let sum = 0;

   for (let i = 0; i < expensesItems.length; i++) {
      let a = expensesItems[i].value,
         b = expensesItems[++i].value;
   
      if (typeof(a) === "string" && typeof(a) != null && typeof(b) != null
         && a != '' && b != '' && a.length < 50) {
         appData.expenses[a] = b;

         if (isNaN(b)) {
            alert('Цена для ' + a + ' должна являться числом');
         } else {
            sum += +b;
         }
      }
   }

   resultFieldsValue[3].textContent = sum;
});


optionalExpensesButton.addEventListener('click', function() {
   for (let i = 0; i < expensesOptionsItems.length; i++) {
      let a = expensesOptionsItems[i].value;
      appData.optionalExpenses[i] = a;
      resultFieldsValue[4].textContent += appData.optionalExpenses[i] + ' ';
   }
})


countButton.addEventListener('click', function() {

   if(appData.budjet != undefined) {
      appData.moneyPerDay = (appData.budjet / 30).toFixed();


      let expenses = resultFieldsValue[3].textContent;
      if (expenses == null || expenses == '') {
         resultFieldsValue[1].textContent = appData.moneyPerDay;
      } else {
         resultFieldsValue[1].textContent = appData.moneyPerDay - +expenses;
      }
      

      if (appData.moneyPerDay <= 100) {
         resultFieldsValue[2].textContent = "Минимальный уровень достатка";
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
         resultFieldsValue[2].textContent = "Средний уровень достатка";
      } else if (appData.moneyPerDay > 2000)  {
         resultFieldsValue[2].textContent = "Высокий уровень достатка";
      } else {
         resultFieldsValue[2].textContent = "Произошла ошибка!";
      }

      
   } else {
      resultFieldsValue[1].textContent = "Произошла ошибка!";
   }

});



chooseIncomeField.addEventListener('input', function() {
   let items = chooseIncomeField.value;
   appData.income = items.split(', ');

   resultFieldsValue[5].textContent = appData.income;
});



savingsChecbox.addEventListener('click', function() {
   (appData.savings == false) ? appData.savings = true : appData.savings = false;
});



savingsFieldSum.addEventListener('input', function() {
   if (appData.savings == true) {
      let save = +savingsFieldSum.value,
         percent = +savingsFieldPercent.value;

      appData.monthIncome = (save/100/12*percent);
      appData.yearIncome = (save/100*percent);
      resultFieldsValue[6].textContent = appData.monthIncome.toFixed(1);
      resultFieldsValue[7].textContent = appData.yearIncome.toFixed(1);
   }
});



savingsFieldPercent.addEventListener('input', function() {
   if (appData.savings == true) {
      let save = +savingsFieldSum.value,
         percent = +savingsFieldPercent.value;

      appData.monthIncome = (save/100/12*percent).toFixed();
      appData.yearIncome = (save/100*percent).toFixed();
      resultFieldsValue[6].textContent = appData.monthIncome;
      resultFieldsValue[7].textContent = appData.yearIncome;
   }
});



let appData = {
   budjet: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false
};








// for (let key in appData) {
//    if (typeof(appData[key]) === "object") {
//       alert('Наша программа включает в себя данные: Объект ' + key);
//    } else {
//       alert('Наша программа включает в себя данные: ' + appData[key]);
//    }
// }







// let i = 0;
// while (i < 2) {
//    let a = prompt('Введите обязательную статью расходов в этом месяце'),
//       b = prompt('Во сколько обойдется?');

//    if (typeof(a) === "string" && typeof(a) != null && typeof(b) != null
//       && a != '' && b != '' && a.length < 50) {
//       console.log("done");
//       appData.expenses[a] = b;
//    } else {
//       alert("Пожалуйста, ответьте на вопросы");
//       console.log("false");
//       --i;
//    }

//    i++;
// }

// let i = 0;
// do {
//    i++;
//    let a = prompt('Введите обязательную статью расходов в этом месяце'),
//       b = prompt('Во сколько обойдется?');


//    if (typeof(a) === "string" && typeof(a) != null && typeof(b) != null
//       && a != '' && b != '' && a.length < 50) {
//       console.log("done");
//       appData.expenses[a] = b;
//    } else {
//       alert("Пожалуйста, ответьте на вопросы");
//       console.log("false");
//       --i;
//    } 
// } while (i < 2);