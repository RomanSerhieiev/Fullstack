// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [42, 'str', "bar", true, null, undefined, {}, [], NaN, BigInt(1234615436143714634164361423)];
console.log(`${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} ${arr[5]} ${arr[6]} ${arr[7]} ${arr[8]} ${arr[9]}`);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const learnJavaScriptQuickly = {
    title: "Learn JavaScript Quickly: A Complete Beginner’s Guide to Learning JavaScript, Even If You’re New to Programming (Crash Course With Hands-On Project Book 5)",
    pageCount: 176,
    genre: "JavaScript Programming"
};

const theRoadToReact = {
    title: "The Road to React: Your journey to master React.js in JavaScript (2022 Edition)",
    pageCount: 388,
    genre: "JavaScript Programming"
};

const javaScriptFromBeginnerToProfessional = {
    title: "JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages",
    pageCount: 544,
    genre: "JavaScript Programming"
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
const reactKeyConcepts = {
    title: "React Key Concepts: Consolidate your knowledge of React’s core features",
    pageCount: 590,
    genre: "JavaScript Programming",
    authors: [{name: "Maximilian Schwarzmuller", age: 41}]
};

const learningWebDesign = {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    pageCount: 811,
    genre: "JavaScript Programming",
    authors: [{name: "Jennifer Robbins", age: 38}]
};

const beginningSvelte = {
    title: "Beginning Svelte: Develop web applications with SvelteJS - a lightweight JavaScript compiler",
    pageCount: 146,
    genre: "JavaScript Programming",
    authors: [{name: "Greg Lim", age: 47}, {name: "Daniel Correa", age: 45}]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: "Liam", username: "shaquille.oatmeal", password: "t8wM@x2Tt5H%"},
    {name: "Olivia", username: "hanging_with_my_gnomies", password: "bVsPb2*55V0A"},
    {name: "Noah", username: "hoosier-daddy", password: "s^0SP0z2R4!7"},
    {name: "Emma", username: "fast_and_the_curious", password: "cV@X8x5I!#95"},
    {name: "Oliver", username: "averagestudent", password: "Y4eHYx0zJC#1"},
    {name: "Charlotte", username: "BadKarma", password: "#rkQ#4pk8bc2"},
    {name: "Elijah", username: "google_was_my_idea", password: "tW34GewB*87y"},
    {name: "Amelia", username: "cute.as.ducks", password: "Klkg589olr$U"},
    {name: "James", username: "casanova", password: "VnlO^jQ2659&"},
    {name: "Ava", username: "real_name_hidden", password: "cPy&T27E8HqE"}
];

console.log(`
${users[0].password}
${users[1].password}
${users[2].password}
${users[3].password}
${users[4].password}
${users[5].password}
${users[6].password}
${users[7].password}
${users[8].password}
${users[9].password}
`);

// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте скрипт при x, що дорівнює 1, 0, -3
let x = -3;

console.log(x !== 0 ? "Вірно" : "Невірно");

// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 22;

if (time >= 0 && time < 15) {console.log("The first quarter")}
else if (time >= 15 && time < 30) {console.log("The second quarter")}
else if (time >= 30 && time < 45) {console.log("The third quarter")}
else if (time >= 45 && time < 60) {console.log("The fourth quarter")}
else {console.log("Wrong time")}

// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 15;

if (day > 0 && day <= 10) {console.log("The first decade")}
else if (day > 10 && day <= 20) {console.log("The second decade")}
else if (time > 20 && time <= 31) {console.log("The third decade")}
else {console.log("Wrong day")}

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
let weekday = parseInt(prompt("Number of the day of the week"));

switch (weekday) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid number of the day of the week")
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох.
// Також потрібно врахувати коли введені рівні числа.
let firstNumber = parseInt(prompt("Write your first number"));
let secondNumber = parseInt(prompt("Write your second number"));

if (firstNumber > secondNumber) {console.log(firstNumber + " is the largest number")}
else if (firstNumber < secondNumber) {console.log(secondNumber + " is the largest number")}
else {console.log("The numbers are equal")}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null і т.д. включно).
// Напишіть код який, за допомоги оператора || буде присвоювати змінній х значення "default",
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
x = x || "default";

// - з файлу arrays.js (лежить в папці 2023 plan) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(coursesAndDurationArray[0].title + " - Супер")
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(coursesAndDurationArray[1].title + " - Супер")
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(coursesAndDurationArray[2].title + " - Супер")
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(coursesAndDurationArray[3].title + " - Супер")
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(coursesAndDurationArray[4].title + " - Супер")
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(coursesAndDurationArray[5].title + " - Супер")
}