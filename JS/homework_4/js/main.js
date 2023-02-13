// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaRectangle(width, height) {
    return width * height
}

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(radius) {
    return Math.PI * Math.pow(radius, 2)
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r
function areaCylinder(radius, height) {
    return 2 * Math.PI * radius * height + 2 * Math.PI * Math.pow(radius, 2)
}

// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayOutput(array) {
    for (const item of array) {
        console.log(item)
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function textParagraph(text) {
    document.write(`<p>${text}</p>`)
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listStrict(text) {
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listFlexible(text, listItems) {
    document.write(`<ul>`);
    for (let i = 0; i < listItems; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listArray(array) {
    document.write(`<ul>`);
    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}

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

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function sumArray(array) {
    let sum = 0;
    for (const item of array) {
        sum += item
    }
    return sum
}

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swapIndex(array, firstIndex, secondIndex) {
    let value = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = value;
}

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