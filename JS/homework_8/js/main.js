// ----*CONSOLE*----
// 1. Створити функцію-конструктор для об'єктів User з полями id, name, surname , email, phone.
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// 2. Створити пустий масив, наповнити його 10 об'єктами new User(....).
const users = [];

for (let i = 0; i < 10; i++) {
    const user = new User(
        i + 1,
        `UserName${i + 1}`,
        `UserSurname${i + 1}`,
        `user${i + 1}@example.com`,
        `+3800000000${i}`
    )
    users.push(user)
}

console.log("2. Створити пустий масив, наповнити його 10 об'єктами new User(....).");
console.log(users);
console.log("");

// 3. Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter).
const filteredUsers = users.filter(user => !(user.id % 2));

console.log("3. Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter).");
console.log(filteredUsers);
console.log("");

// 4. Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort).
const sortedUsers = users.sort((a, b) => a.id - b.id);

console.log("4. Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort).");
console.log(sortedUsers);
console.log("");

// 5. Створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів).
class Client {
    constructor(id, name, surname, email, phone, order) {
        User.call(this, id, name, surname, email, phone);
        this.order = order
    }
}

// 6. Створити пустий масив, наповнити його 10 об'єктами Client.
const clients = [];

for (let i = 0; i < 10; i++) {
    const client = new Client(
        i + 1,
        `ClientName${i + 1}`,
        `ClientSurname${i + 1}`,
        `client${i + 1}@example.com`,
        `+3800000000${i}`,
        [`product ${i}`, `product ${i + 1}`, `product ${i + 2}`]
    )
    clients.push(client);
}

console.log("6. Створити пустий масив, наповнити його 10 об'єктами Client.");
console.log(clients);
console.log("");

// 7. Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню (sort).
const sortedClients = clients.sort((a, b) => a.order.length - b.order.length);

console.log("7. Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню (sort).");
console.log(sortedClients);
console.log("");

// 8. Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// - drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`.
// - info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`.
// - increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed.
// - changeYear (newValue) - змінює рік випуску на значення newValue.
// - addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car.
function CarFunction(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = parseInt(year);
    this.maxSpeed = parseInt(maxSpeed);
    this.engineVolume = parseInt(engineVolume);

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`)
    }

    this.info = function () {
        for (const key in this) {
            if (typeof this[key] === 'function') continue;
            console.log(`${key.toUpperCase()}: ${this.model}`);
        }
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Нова максимальна швидкість: ${this.maxSpeed}`)
    }

    this.changeYear = function (newValue) {
        this.year = newValue;
        console.log(`Новий рік випуску: ${this.year}`)
    }

    this.addDriver = function (driver) {
        this.driver = driver;
        console.log(`Водій: ${this.driver}`)
    }
}

const carsFunction = [];

for (let i = 0; i < 10; i++) {
    const car = new CarFunction(
        `Model${i + 1}`,
        `Manufacturer${i + 1}`,
        `${i + 2000}`,
        `${i + 200}`,
        `${i + 500}`
    )
    carsFunction.push(car);
}

console.log("8. Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна та наступні функції drive(), info(), increaseMaxSpeed(newSpeed), changeYear(newValue), addDriver(driver)");
console.log("");

for (let i = 0; i < carsFunction.length; i++) {
    carsFunction[i].info();
    carsFunction[i].drive();
    carsFunction[i].increaseMaxSpeed(i + 10);
    carsFunction[i].changeYear(2020 - i);
    carsFunction[i].addDriver(users[i].name);
    console.log("-----------------");
}

console.log("");

// 9. (Те саме, тільки через клас).
class CarClass {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = parseInt(year);
        this.maxSpeed = parseInt(maxSpeed);
        this.engineVolume = parseInt(engineVolume);
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`)
    }

    info() {
        for (const key in this) {
            console.log(`${key.toUpperCase()}: ${this.model}`);
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Нова максимальна швидкість: ${this.maxSpeed}`)
    }

    changeYear(newValue) {
        this.year = newValue;
        console.log(`Новий рік випуску: ${this.year}`)
    }

    addDriver(driver) {
        this.driver = driver;
        console.log(`Водій: ${this.driver}`)
    }
}

const carsClass = [];

for (let i = 0; i < 10; i++) {
    const car = new CarClass(
        `Model${i + 1}`,
        `Manufacturer${i + 1}`,
        `${i + 2000}`,
        `${i + 200}`,
        `${i + 500}`
    )
    carsClass.push(car);
}

console.log("9. Те саме, тільки через клас.");
console.log("");

for (let i = 0; i < carsClass.length; i++) {
    carsClass[i].info();
    carsClass[i].drive();
    carsClass[i].increaseMaxSpeed(i + 10);
    carsClass[i].changeYear(2020 - i);
    carsClass[i].addDriver(users[i].name);
    console.log("-----------------");
}

console.log("");

// 10. Створити клас/функцію-конструктор "попелюшка" з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}

class Cinderella extends Human {
    constructor(name, age, shoeSize) {
        super(name, age);
        this.shoeSize = shoeSize;
    }
}

const cinderellas = [];

for (let i = 0; i < 10; i++) {
    const cinderella = new Cinderella(
        `CinderellaName${i + 1}`,
        `${i + 18}`,
        `${i + 25}`
    )
    cinderellas.push(cinderella)
}

console.log("10. Створити клас/функцію-конструктор \"попелюшка\" з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.");
console.log(cinderellas);
console.log("");

// 11. Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince extends Human {
    constructor(name, age, foundShoe) {
        super(name, age);
        this.foundShoe = foundShoe;
    }
}

const princes = [];

for (let i = 0; i < 10; i++) {
    const prince = new Prince(
        `PrinceName${i + 1}`,
        `${i + 22}`,
        `${40 - i}`
    )
    princes.push(prince)
}

console.log("11. Створити об'єкт класу \"принц\" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.");
console.log(princes);
console.log("");

// 12. За допомоги циклу знайти яка попелюшка повинна бути з принцом.
const selectionForCinderellas = [];

for (let i = 0; i < princes.length; i++) {
    const prince = princes[i];

    for (let j = 0; j < cinderellas.length; j++) {
        const cinderella = cinderellas[j];

        if (prince.foundShoe === cinderella.shoeSize) {
            selectionForCinderellas.push(`${cinderella.name} повинна бути з ${prince.name}`)
        }
    }
}

console.log("12. За допомоги циклу знайти яка попелюшка повинна бути з принцом.");
console.log(selectionForCinderellas);
console.log("");

// 13. Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку.
const selectionForPrinces = [];

for (const prince of princes) {
    const comparison = cinderellas.find(cinderella => cinderella.shoeSize === prince.foundShoe);

    if (comparison) {
        selectionForPrinces.push(`${prince.name} повинен бути з ${comparison.name}`)
    }
}

console.log("13. Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку.");
console.log(selectionForPrinces);