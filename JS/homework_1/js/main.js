// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let one = 1;
let ten = 10;
let nnn = -999;
let ott = 123;
const PI = 3.14
let tas = 2.7;
let st = 16;
let t = true;
let f = false;

console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(one);
console.log(ten);
console.log(nnn);
console.log(ott);
console.log(PI);
console.log(tas);
console.log(st);
console.log(t);
console.log(f);

// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = "Roman";
let middleName = "Serhiiovych";
let lastName = "Serhieiev";
let person = lastName + " " + firstName + " " + middleName;

console.log(person);

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let fn = prompt("My name");
let mn = prompt("My middle name");
let age = parseInt(prompt("My age"));

console.log(`${"My name is"} ${fn} ${mn} ${"and I'm"} ${age} ${"years old."}`);