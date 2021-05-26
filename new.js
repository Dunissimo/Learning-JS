"use strict";

//const logg = "Hello World";

// console.log(logg.slice(0, 6)); // поддерживает отрицательные значения
// console.log(logg.substring(0, 6)); // не поддерживает отрицательные значения
// console.log(logg.substr(6, 5));

//const test = "12.2px";
//console.log(parseInt(test));
//console.log(parseFloat(test));

// 

// callback function

// function learnJS(lang, callback) {
//   console.log(`Я учу ${lang}`);
//   callback();
// }

// function done() {
//   console.log("Я прошел этот урок!");
// }

// learnJS("JavaScript", done);

// Деструктуризация объектов

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    background: 'red',
  },
  makeTest: function(message) {
    console.log(message);
  }
};

// console.log(options.name);

// delete options.name;

// console.log(options);

// for (const key in options) { 
//   if (typeof(options[key]) == 'object') {
//     for (const i in options[key]) {
//       console.log(`Свойство: ${i}, значение: ${options[key][i]}`);
//     }
//   } else {
//     console.log(`Свойство: ${key}, значение: ${options[key]}`);
//   }
// }

// счетчик свойств объекта
// let counter = 0;
// function countObject(obj) {
//   for (const key in obj) {
//     counter++;
//   }
// }
// countObject(options);
// console.log(counter);

// счетчик свойств объекта с помощью методов объекта
//console.log(Object.keys(options).length);

//options.makeTest("Message");

// деструктуризация 

// const {border, background} = options.colors;
// console.log(border);
// console.log(background);

// массивы и псевдомассивы

//const arr = [1, 2, 3, 4, 5, 6];

//arr.pop(); // удаляет последний элемент

//console.log(arr);

//arr.push(10); // добавляет в конец элемент

//console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// console.log('-');
// for (let value of arr) {
//   console.log(value);
// }

// let array = [1, 2, 3, 4];

// array.forEach(function(item, index, array) {
//   console.log(`item: ${item}, index: ${index} in ${array}`);
//   console.log('');
// });

//const str = prompt();
//const fruits = str.split(', ');
//console.log(fruits);

// const names = ['john', 'den', 'pasha'];
// const lol = names.join(', ');
// console.log(lol);

// const arr = [1, 13, 25, 9];
// arr.sort(function(a, b) {
//   return a - b;
// });
// console.log(arr);

// псевдомассивы: они не имеют методов массивов и все