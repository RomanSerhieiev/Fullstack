// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaRectangle(width, height) {
    return width * height
}

console.log(areaRectangle(20, 10));
console.log("");

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(radius) {
    return Math.PI * Math.pow(radius, 2)
}

console.log(areaCircle(10));
console.log("");

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r
function areaCylinder(radius, height) {
    return 2 * Math.PI * radius * height + 2 * Math.PI * Math.pow(radius, 2)
}

console.log(areaCylinder(10, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayOutput(array) {
    for (const item of array) {
        console.log(item)
    }
}

arrayOutput([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log("");

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function textParagraph(text) {
    document.write(`<p>${text}</p><hr>`)
}

textParagraph("Lorem 1");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listStrict(text) {
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul><hr>`)
}

listStrict("Lorem 2");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listFlexible(text, listItems) {
    document.write(`<ul>`);
    for (let i = 0; i < listItems; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul><hr>`)
}

listFlexible("Lorem 3", 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listArray(array) {
    document.write(`<ul>`);
    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul><hr>`)
}

listArray([1, "Lorem 4", true, false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function listObject(array) {
    for (const item of array) {
        document.write(`<ul>`);
        for (const itemKey in item) {
            document.write(`<li>${itemKey}: ${item[itemKey]}</li>`)
        }
        document.write(`</ul>`)
    }
}

listObject([{id: 1, name: "Ann", age: 31}, {id: 2, name: "Drew", age: 32}, {id: 3, name: "Andrew", age: 33}]);

// - створити функцію яка повертає найменьше число з масиву
function smallestNumber(array) {
    let number = array[0];
    for (const item of array) {
        if (item < number) {
            number = item
        }
    }
    return number
}

console.log(smallestNumber([9, 1, 8, 2, 7, 3, 6, 4, 5]));
console.log("");

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function sumArray(array) {
    let sum = 0;
    for (const item of array) {
        sum += item
    }
    return sum
}

console.log(sumArray([1, 2, 10]));
console.log("");

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swapIndex(array, firstIndex, secondIndex) {
    let value = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = value;
    return array
}

console.log(swapIndex([11, 22, 33, 44], 0, 1));
console.log("");

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchangeCurrency(sumUAH, currencyValues, exchangeCurrency) {
    for (const currency of currencyValues) {
        for (const currencyKey in currency) {
            if (currency.currency === exchangeCurrency)
                return sumUAH / currency.value
        }
    }
}

console.log(exchangeCurrency(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));