// function foo() {
//   console.log('Hello world');
// }
// foo()

// const foo2 = function() {
//   console.log('Hello world');
// }
// foo2()
'use strict'
// let name = 'Svetlana'

// function foo () {
//   let age = 27
//   console.log(' Привет', name);
//   console.log('Мне', age )
// }
// foo()

// age = 28
// console.log(age);

// let name = 'Svetlana'
// function foo() {
//   name = 'Arsen'
//   console.log('Hi', name);
// }
// console.log('Hi', name);
// foo()

let titleProject = prompt('Название проекта?');
 function showTypeOf() {
  titleProject = getTitle(titleProject);
  console.log('Проект', titleProject);
 }
 showTypeOf()


function getTitle(_titleProject) {
  return _titleProject.charAt(0).toUpperCase() + _titleProject.slice(1).toLowerCase();
}

 let screensValue = prompt('Тип экрана: шаблонные, с уникальным дизайном, с анимациями?');
  console.log(screensValue);

 
  let responsive = prompt('Нужен ли респонсивный сайт?');

 if (responsive == 'да'  || responsive == 'Да') { 

  responsive = true; 
} 
else {
    responsive = false; 
  }
  
let service1 = prompt('Какой сервис нужен?');


let servicePrice1 = +prompt('Сколько это будет стоить?');

let service2  = prompt('Какой еще сервис тебе нужен?');


let servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?");



const screenPrice = 70000;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let rollback = Math.round(+fullPrice * 0.15);


let servicePercentPrice = fullPrice - +rollback;


 
if (fullPrice > 50000) {

   getRollbackMessage('тогда сделаем скидку в 10%');
} else if (fullPrice == 50000) {

 getRollbackMessage('тогда сделаем скидку в 8%');
} else if (fullPrice > 20000 & fullPrice < 40000) {
  
   getRollbackMessage('тогда сделаем скидку в 5%');
} else if (fullPrice == 20000) {
  
   getRollbackMessage('тогда сделаем скидку в 3%');
} else if (fullPrice < 20000 & fullPrice > 0) {
  
  getRollbackMessage('скидка не предусмотрена');
} else if (fullPrice == 0) {
  getRollbackMessage('какие могут быть скидки?'); 
} else if (fullPrice < 0) {
  
  getRollbackMessage('что-то пошло не так'); 
}

function getRollbackMessage(discount) {
  
  console.log('Скидка', discount);
}
//getRollbackMessage();


 





// function getAllServicePrices() {
//   let allServicePrices = +servicePrice1 + +servicePrice2;
//   console.log(allServicePrices);
// }
// getAllServicePrices()

// let getAllServicePrices = function() {
//   let allServicePrices = +servicePrice1 + +servicePrice2;
//   console.log(allServicePrices);
// }
// getAllServicePrices()

let allServicePrices = +servicePrice1 + +servicePrice2;

let getAllServicePrices = function() {
  let allServicePrices = +servicePrice1 + +servicePrice2;
 }
getAllServicePrices()



function getFullPrice() {
  let fullPrice = screenPrice + +getAllServicePrices;
}
getFullPrice()


function getServicePercentPrices() {
  console.log('servicePercentPrice = ', servicePercentPrice);
}
getServicePercentPrices()




