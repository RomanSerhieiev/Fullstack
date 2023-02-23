// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б.
console.log("Площа прямокутника:");
const areaRectangle = (width, height) => Math.round(width * height);
console.log(areaRectangle(20, 10));
console.log("");

// - створити функцію яка обчислює та повертає площу кола з радіусом r.
const areaCircle = (radius) => Math.round(Math.PI * Math.pow(radius, 2));
console.log("Площа кола:");
console.log(areaCircle(10));
console.log("");

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r.
const areaCylinder = (radius, height) => Math.round(2 * Math.PI * radius * height + 2 * Math.PI * Math.pow(radius, 2));
console.log("Площа циліндру:");
console.log(areaCylinder(10, 10));
console.log("");

// - створити функцію яка приймає масив та виводить кожен його елемент.
// *КОНСОЛЬ*
const arrayOutputConsole = (array) => {
    for (const item of array) {
        if (Array.isArray(item)) {
            arrayOutputConsole(item)
        } else {
            console.log(item)
        }
    }
}
console.log("Елементи масиву:");
arrayOutputConsole([1, [2, [3, [4, [5], 6], 7], 8], 9]);
console.log("");
// *ДОКУМЕНТ*
const arrayOutputDocument = (array) => {
    for (const item of array) {
        if (Array.isArray(item)) {
            arrayOutputDocument(item)
        } else {
            document.write(`<span>${item}</span> `)
        }
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент.
// *КОНСОЛЬ*
const textParagraphConsole = (text) => console.log(text);
console.log("Параграф:");
textParagraphConsole("Lorem 1");
console.log("");
// *ДОКУМЕНТ*
const textParagraphDocument = (text) => document.write(`<p><span>${text}</span></p>`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// *КОНСОЛЬ*
const listStrictConsole = (text) => {
    console.log(text);
    console.log(text);
    console.log(text)
}
console.log("Суворий список:");
listStrictConsole("Lorem 2");
console.log("");
// *ДОКУМЕНТ*
const listStrictDocument = (text) => document.write(`<ul>
                                                       <li><span>${text}</span></li>
                                                       <li><span>${text}</span></li>
                                                       <li><span>${text}</span></li>
                                                   </ul>`);

// - створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл).
// *КОНСОЛЬ*
const listFlexibleConsole = (text, listItems) => {
    for (let i = 0; i < listItems; i++) {
        console.log(text)
    }
}
console.log("Гнучкий список:");
listFlexibleConsole("Lorem 3", 3);
console.log("");
// *ДОКУМЕНТ*
const listFlexibleDocument = (text, listItems) => {
    document.write(`<ul>`);
    for (let i = 0; i < listItems; i++) {
        document.write(`<li><span>${text}</span></li>`)
    }
    document.write(`</ul>`)
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список.
// *КОНСОЛЬ*
const listArrayConsole = (array) => {
    for (const item of array) {
        console.log(item);
    }
}
console.log("Список з масиву:");
listArrayConsole([1, "Lorem 4", true, false]);
console.log("");
// *ДОКУМЕНТ*
const listArrayDocument = (array) => {
    document.write(`<ol start="0">`);
    for (const item of array) {
        document.write(`<li><span>${item}</span></li>`)
    }
    document.write(`</ol>`)
}

// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// *КОНСОЛЬ*
const listObjectConsole = (array) => {
    for (const item of array) {
        for (const itemKey in item) {
            console.log(itemKey + ": " + item[itemKey]);
        }
    }
}
console.log("Масив об'єктів:");
listObjectConsole([{id: 1, name: "Ann", age: 31}, {id: 2, name: "Drew", age: 32}, {id: 3, name: "Andrew", age: 33}]);
console.log("");
// *ДОКУМЕНТ*
const listObjectDocument = (array) => {
    document.write(`<div class="flex">`)
    for (const item of array) {
        document.write(`<ul>`);
        for (const itemKey in item) {
            document.write(`<li><span>${itemKey}: ${item[itemKey]}</span></li>`)
        }
        document.write(`</ul>`)
    }
    document.write(`</div>`)
}

// - створити функцію яка повертає найменьше число з масиву.
const smallestNumber = (array) => {
    let number = array[0];
    for (const item of array) {
        if (item < number) {
            number = item
        }
    }
    return number
}
console.log("Найменше число з масиву:");
console.log(smallestNumber([9, 1, 8, 2, 7, 3, 6, 4, 5]));
console.log("");

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13.
const sumArray = (array) => {
    let sum = 0;
    for (const item of array) {
        sum += item
    }
    return sum
}
console.log("Сума значень елементів масиву:");
console.log(sumArray([1, 2, 10]));
console.log("");

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах.
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44].
const swapIndex = (array, firstIndex, secondIndex) => {
    let value = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = value;
    return array
}
console.log("Зміна місць значень масиву:");
arrayOutputConsole(swapIndex([11, 22, 33, 44], 0, 1));
console.log("");

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency).
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250.
const exchangeCurrency = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const currency of currencyValues) {
        for (const currencyKey in currency) {
            if (currency.currency === exchangeCurrency)
                return sumUAH / currency.value
        }
    }
}
console.log("Обмін валюти:");
console.log(exchangeCurrency(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));

// *HTML*
document.write(`<div class="container">
                    <main>
                        <header>
                            <h1>HOMEWORK #5</h1>
                        </header>
                        <section class="areaRectangle active">
                            <h2>Площа прямокутника</h2>
                            <p>Функція, яка обчислює та повертає площу прямокутника.</p>
                            <p>Результат: <span>${areaRectangle(30, 10)}</span></p>
                        </section>
                        <section class="areaCircle">
                            <h2>Площа кола</h2>
                            <p>Функція, яка обчислює та повертає площу кола.</p>
                            <p>Результат: <span>${areaCircle(10)}</span></p>
                        </section>
                        <section>
                            <h2>Площа циліндру</h2>
                            <p>Функція, яка обчислює та повертає площу циліндру.</p>
                            <p>Результат: <span>${areaCylinder(10, 10)}</span></p>
                        </section>
                        <section>
                            <h2>Елементи масиву</h2>
                            <p>Функція, яка приймає масив та виводить кожен його елемент.</p>
                            <p>Результат: `)
                                arrayOutputDocument([1, [2, [3, [4, [5], 6], 7], 8], 9]);
            document.write(`</p>
                        </section>
                        <section>
                            <h2>Параграф</h2>
                            <p>Функція, яка повертає параграф з текстом.</p>
                            <p>Результат:</p>`)
                            textParagraphDocument("Lorem 1")
        document.write(`</section>
                        <section>
                            <h2>Суворий список</h2>
                            <p>Функція, яка створює ul з трьома елементами li.</p>`)
                            listStrictDocument("Lorem 2");
        document.write(`</section>
                        <section>
                            <h2>Гнучкий список</h2>
                            <p>Функція, яка створює ul з будь-якою кількістю елементів li.</p>`)
                            listFlexibleDocument("Lorem 3", 3);
        document.write(`</section>
                        <section>
                            <h2>Список з масиву</h2>
                            <p>Функція, яка приймає масив примітивних елементів та будує для них список.</p>`)
                            listArrayDocument([1, "Lorem 4", true, false]);
        document.write(`</section>
                        <section>
                            <h2>Масив об'єктів</h2>
                            <p>Функція, яка приймає масив об'єктів з наступними полями id, name, age та виводить їх.</p>`)
                            listObjectDocument([{id: 1, name: "Ann", age: 31}, {id: 2, name: "Drew", age: 32}, {id: 3, name: "Andrew", age: 33}]);
        document.write(`</section>
                        <section>
                            <h2>Найменше число з масиву</h2>
                            <p>Функція, яка повертає найменьше число з масиву.</p>
                            <p>Результат: <span>${smallestNumber([9, 1, 8, 2, 7, 3, 6, 4, 5])}</span></p>
                        </section>
                        <section>
                            <h2>Сума значень елементів масиву</h2>
                            <p>Функція, яка приймає масив чисел, сумує значення елементів масиву та повертає його.</p>
                            <p>Результат: <span>${sumArray([1, 2, 10])}</span></p>
                        </section>
                        <section>
                            <h2>Зміна місць значень масиву</h2>
                            <p>Функція міняє місцями значення у відповідних індексах.</p>
                            <p>Результат: `);
                                arrayOutputDocument(swapIndex([11, 22, 33, 44], 0, 1))
        document.write(`</section>
                        <section>
                            <h2>Обмін валюти</h2>
                            <p>Функція обміну валюти.</p>
                            <p>Результат: <span>${exchangeCurrency(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD')}</span></p>
                        </section>
                    </main>
                </div>`)