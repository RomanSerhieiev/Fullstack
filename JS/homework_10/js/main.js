// Створити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами: заповнити форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом.
function displayData() {
    const form = document.getElementById('my-form');
    const name = form.elements['name'].value;
    const surname = form.elements['surname'].value;
    const age = form.elements['age'].value;

    if (name === "" || surname === "" || age === "") {
        alert("Please fill in all fields");
        return
    }

    const data = {
        name: name,
        surname: surname,
        age: age
    }

    const result = document.getElementById('result');
    result.textContent = JSON.stringify(data, null, 2)
}

// Є сторінка, на якій є блок, я кому знаходиться цифра.
// Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1.
window.onload = function() {
    const numberBlock = document.querySelector(".number-block");

    let number = localStorage.getItem("number");
    if (!number) {
        number = 1;
    }

    number++;
    localStorage.setItem("number", number);
    numberBlock.textContent = number;
}

// Є сторінка users.html (назва довільна), при відвідуванні якої в локальне сховище,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
const sessions = JSON.parse(localStorage.getItem("sessions")) || [];
sessions.push({ date: new Date() });
localStorage.setItem("sessions", JSON.stringify(sessions));

// Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки users.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сесію.
// Зробити масив на 100 об'єктів та дві кнопки prev та next.
// При завантаженні сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів.
// При натисканні prev виводяться попередні 10 об'єктів.
const array = [];

for (let i = 0; i < 100; i++) {
    array.push({ id: i, name: `Item ${i}` })
}

const container = document.getElementById("container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const itemsPerPage = 10;
let currentPage = 0;

function displayPage(page) {
    container.innerHTML = "";
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    const items = array.slice(start, end);

    items.forEach(item => {
        const div = document.createElement("div");
        div.textContent = `${item.id}: ${item.name}`;
        container.appendChild(div)
    })
}

displayPage(currentPage);

prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        displayPage(currentPage)
    }
})

nextBtn.addEventListener("click", () => {
    if (currentPage < (array.length / itemsPerPage) - 1) {
        currentPage++;
        displayPage(currentPage)
    }
})

// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
const rowsInput = document.getElementById("rows");
const columnsInput = document.getElementById("columns");
const contentInput = document.getElementById("content");
const createTableButton = document.getElementById("create-table");
const tableContainer = document.getElementById("table-container");

createTableButton.addEventListener("click", function() {
    const rows = parseInt(rowsInput.value);
    const columns = parseInt(columnsInput.value);
    const content = contentInput.value;
    const table = document.createElement("table");

    for (let i = 0; i < rows; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < columns; j++) {
            const cell = document.createElement("td");
            cell.textContent = content;
            row.appendChild(cell)
        }

        table.appendChild(row)
    }

    tableContainer.innerHTML = "";
    tableContainer.appendChild(table)
})