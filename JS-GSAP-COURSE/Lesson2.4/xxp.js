

// let x = 5;

// if (x > 10) {
//   console.log('Условие верно');
// } else {
//   console.log('Условие не верно'); 
// }

// let a = 5;
// let b = '10';
// let res = a + +b

// console.log(a.toString())

// console.log(res);
// console.log(typeof a)
// console.log(typeof b)

// console.log(a+b);

// let age = +prompt('Укажите возраст')
// let c = 10;
// let sum = age + c;
// console.log(sum);
// // console.log(age);

// let titleProject = 'Интернет магазин обуви';
// console.log(typeof titleProject);
// const screensValue = "шаблонные, с уникальным дизайном, с анимациями"
// console.log(typeof screensValue);
// const screenPrice = 3000;
// console.log(typeof screenPrice);
// const percentage = 10;
// console.log(typeof percentage);
// const fullPrice = 2000000;
// console.log(typeof fullPrice);
// const responsive = true;
// console.log(typeof responsive);


 let titleProject = prompt('Название проекта?');
 console.log(titleProject);

 let screensValue = prompt('Тип экрана: шаблонные, с уникальным дизайном, с анимациями?');
  console.log(screensValue);

 
  let responsive = prompt('Нужен ли респонсивный сайт?');

 if (responsive == 'да'  || responsive == 'Да') { 

  responsive = true; 
} 
else {
    responsive = false; 
  }
  console.log(responsive);


let service1 = prompt('Какой сервис нужен?');
console.log(service1);

let servicePrice1 = +prompt('Сколько это будет стоить?');
console.log(servicePrice1);

let service2  = prompt('Какой еще сервис тебе нужен?');
console.log(service2);

let servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?");
console.log(servicePrice2);


const screenPrice = 3000;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);



// let rollback = +fullPrice * 0.15;
// console.log(Math.round(+rollback))

let rollback = Math.round(+fullPrice * 0.15);
console.log(rollback);



let servicePercentPrice = fullPrice - +rollback;
console.log(servicePercentPrice);


if (fullPrice > 50000) {
  console.log('тогда сделаем скидку в 10%');
} else if (fullPrice == 50000) {
  console.log('тогда сделаем скидку в 8%');
} else if (fullPrice > 20000 & fullPrice < 40000) {
  console.log('сделаем скидку 5%');
} else if (fullPrice == 20000) {
  console.log('сделаем скидку 3%');
} else if (fullPrice < 20000 & fullPrice > 0) {
  console.log('скидка не предусмотрена');
} else if (fullPrice == 0) {
  console.log('какие могут быть скидки?');
} else if (fullPrice < 0) {
  console.log('Что то пошло не так');
}
