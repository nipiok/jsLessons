'use strict';

let inputRUB = document.getElementById('rub'),
   inputUSD = document.getElementById('usd');

inputRUB.addEventListener('input', () => {
   let request = new XMLHttpRequest();
   request.open('GET', 'current.json');
   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
   request.send();
   
   function converterVal () {
      let promise = new Promise (function(resolve, reject) {

         request.addEventListener('readystatechange', function() {
            if (request.readyState === 4) { 
               if (request.status === 200) {
                  resolve();
               } else {
                  reject();
               }
            }
         });
         
      });

      return promise;
   }
   
   converterVal()
                  .then(function() {
                     let data = JSON.parse(request.response);
                     inputUSD.value = (inputRUB.value / data.usd).toFixed(2);
                  })
                  .catch(function() {
                     inputUSD.value = 'что-то пошло не так';
                  }); 

});