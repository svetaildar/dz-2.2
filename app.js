const firstName = 'Svetlana'
let age = '30'
age = '31'
const city = 'Karaganda'
const hobby = 'Books, yoga'
console.log('Hello', firstName, age, city, hobby)



let string = 'этО СТроКа с разным РЕгистроМ'
let firstStr = string[0].toUpperCase();
let str1 = string.slice(1).toLowerCase();
console.log(firstStr + str1);


let name1 = "Александр";
 if(name1.length>6 && name1[0] == "А") {
   console.log('Ваше имя длиннее чем 6 символов');
} else {
  console.log('Ваше имя короче , чем шесть букв или не начинается на букву  А');
}
 


let name2 = "Евгений";
 if(name2.length > 6 && name2[0] == "А") {
   console.log('Ваше имя длиннее чем 6 символов');
} else if(name2.length > 4 && name2[0] == "E") {
  console.log('Ваше имя длиннее  , чем четыре буквы или   начинается на букву  Е');
}
 else {
  console.log('какое у вас интересное имя')
 }


for(let i = 0; i<10; i++) {
  console.log('Число -' +i)
}


let tools = ['ручка','карандаш','маркер','ножницы'];
 
for(let i = 0; i < tools.length; i++) {
  console.log('У вас есть:' +tools[i]);
}