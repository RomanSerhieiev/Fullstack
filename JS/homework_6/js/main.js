//    ----*TASKS*----
//      -*CONSOLE*-
// 1. Визначення довжини рядка.
console.log('1. Визначення довжини рядка.');
const arr1 = ['hello world', 'lorem ipsum', 'javascript is cool'];
arr1.forEach((item) => console.log(item + ' - ' + item.length));
console.log('');

// 2. Переведення літер до верхнього регістру.
console.log('2. Переведення літер до верхнього регістру.');
const arr2 = ['hello world', 'lorem ipsum', 'javascript is cool'];
arr2.map((item) => console.log(item + ' - ' + item.toUpperCase()));
console.log('');

// 3. Переведення літер до нижнього регістру.
console.log('3. Переведення літер до нижнього регістру.');
const arr3 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
arr3.map((item) => console.log(item + ' - ' + item.toLowerCase()));
console.log('');

// 4. Видалення зайвих пробілів з рядка.
console.log('4. Видалення зайвих пробілів з рядка.');
const str1 = ' dirty       string   ';
console.log(str1 + ' - ' + str1.split(' ').filter((w) => w.length).join(' '));
console.log('');

// 5. Створення масиву слів з рядка.
console.log('5. Створення масиву слів з рядка.');
const str2 = 'Ревуть воли як ясла повні';
const stringToarray = (str) => str.split(' ');
const arr4 = stringToarray(str2);
console.log(str2);
console.log(arr4);
console.log('');

// 6. Перетворення об'єктів масиву у рядки.
console.log('6. Перетворення об\'єктів масиву у рядки.');
const arr5 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(arr5);
console.log(arr5.map(num => num.toString()));
console.log('');

// 7. Сортування чисел масиву.
console.log('7. Сортування чисел масиву.');
const arr6 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const arr7 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const sortNums = (arr, direction) => {
    switch (direction) {
        case 'ascending':
            return arr.sort((a, b) => a - b);
        case 'descending':
            return arr.sort((a, b) => b - a);
    }
}
console.log(arr5);
console.log(sortNums(arr6, 'ascending'));
console.log(sortNums(arr7, 'descending'));
console.log('');

// Масив coursesAndDurationArray
console.log('Масив coursesAndDurationArray.')
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4, id: 44},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4, id: 44},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4, id: 44},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const coursesAndDurationArray3 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4, id: 44},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray);
console.log('');

// 8. Сортування coursesAndDurationArray за спаданням monthDuration.
console.log('8. Сортування coursesAndDurationArray за спаданням за monthDuration.');
console.log(coursesAndDurationArray1.sort((a, b) => b.monthDuration - a.monthDuration));
console.log('');

// 9. Фільтрування coursesAndDurationArray за тривалістю понад 5 місяців.
console.log('9. Фільтрування coursesAndDurationArray за тривалістю понад 5 місяців.');
console.log(coursesAndDurationArray2.filter((item) => item.monthDuration > 5));
console.log('');

// 10. Перетворення кожного елементу на тип {id,title,monthDuration}.
console.log('10. Перетворення кожного елементу на тип {id,title,monthDuration}.');
console.log(coursesAndDurationArray3.map((item, i) => {
    return {
        id: ++i,
        title: item.title,
        monthDuration: item.monthDuration,
    }
}));

// Колода карт.
console.log('Колода карт.')
const cards1 = [
    // --Red
    {value: 'joker', color: 'red', cardSuit: 'jokers'},
    // -Hearts
    {value: '2', color: 'red', cardSuit: 'heart'},
    {value: '3', color: 'red', cardSuit: 'heart'},
    {value: '4', color: 'red', cardSuit: 'heart'},
    {value: '5', color: 'red', cardSuit: 'heart'},
    {value: '6', color: 'red', cardSuit: 'heart'},
    {value: '7', color: 'red', cardSuit: 'heart'},
    {value: '8', color: 'red', cardSuit: 'heart'},
    {value: '9', color: 'red', cardSuit: 'heart'},
    {value: '10', color: 'red', cardSuit: 'heart'},
    {value: 'jack', color: 'red', cardSuit: 'heart'},
    {value: 'queen', color: 'red', cardSuit: 'heart'},
    {value: 'king', color: 'red', cardSuit: 'heart'},
    {value: 'ace', color: 'red', cardSuit: 'heart'},
    // -Diamond
    {value: '2', color: 'red', cardSuit: 'diamond'},
    {value: '3', color: 'red', cardSuit: 'diamond'},
    {value: '4', color: 'red', cardSuit: 'diamond'},
    {value: '5', color: 'red', cardSuit: 'diamond'},
    {value: '6', color: 'red', cardSuit: 'diamond'},
    {value: '7', color: 'red', cardSuit: 'diamond'},
    {value: '8', color: 'red', cardSuit: 'diamond'},
    {value: '9', color: 'red', cardSuit: 'diamond'},
    {value: '10', color: 'red', cardSuit: 'diamond'},
    {value: 'jack', color: 'red', cardSuit: 'diamond'},
    {value: 'queen', color: 'red', cardSuit: 'diamond'},
    {value: 'king', color: 'red', cardSuit: 'diamond'},
    {value: 'ace', color: 'red', cardSuit: 'diamond'},
    // --Black
    {value: 'joker', color: 'black', cardSuit: 'jokers'},
    // -Spade
    {value: '2', color: 'black', cardSuit: 'spade'},
    {value: '3', color: 'black', cardSuit: 'spade'},
    {value: '4', color: 'black', cardSuit: 'spade'},
    {value: '5', color: 'black', cardSuit: 'spade'},
    {value: '6', color: 'black', cardSuit: 'spade'},
    {value: '7', color: 'black', cardSuit: 'spade'},
    {value: '8', color: 'black', cardSuit: 'spade'},
    {value: '9', color: 'black', cardSuit: 'spade'},
    {value: '10', color: 'black', cardSuit: 'spade'},
    {value: 'jack', color: 'black', cardSuit: 'spade'},
    {value: 'queen', color: 'black', cardSuit: 'spade'},
    {value: 'king', color: 'black', cardSuit: 'spade'},
    {value: 'ace', color: 'black', cardSuit: 'spade'},
    // -Clubs
    {value: '2', color: 'black', cardSuit: 'clubs'},
    {value: '3', color: 'black', cardSuit: 'clubs'},
    {value: '4', color: 'black', cardSuit: 'clubs'},
    {value: '5', color: 'black', cardSuit: 'clubs'},
    {value: '6', color: 'black', cardSuit: 'clubs'},
    {value: '7', color: 'black', cardSuit: 'clubs'},
    {value: '8', color: 'black', cardSuit: 'clubs'},
    {value: '9', color: 'black', cardSuit: 'clubs'},
    {value: '10', color: 'black', cardSuit: 'clubs'},
    {value: 'jack', color: 'black', cardSuit: 'clubs'},
    {value: 'queen', color: 'black', cardSuit: 'clubs'},
    {value: 'king', color: 'black', cardSuit: 'clubs'},
    {value: 'ace', color: 'black', cardSuit: 'clubs'},
];
console.log(cards1);
console.log('');

// 11. Пошук пікового туза.
console.log('11. Пошук пікового туза.')
console.log(cards1.find((card) => card.cardSuit === 'spade' && card.value === 'ace'));
console.log('');

// 12. Пошук всіх шісток.
console.log('12. Пошук всіх шісток.')
console.log(cards1.filter((card) => card.value === '6'));
console.log('');

// 13. Пошук всіх червоних карт.
console.log('13. Пошук всіх червоних карт.')
console.log(cards1.filter((card) => card.color === 'red'));
console.log('');

// 14. Пошук всіх бубн.
console.log('14. Пошук всіх бубн.')
console.log(cards1.filter((card) => card.cardSuit === 'diamond'));
console.log('');

// 15. Пошук всіх треф від 9 і більше.
console.log('15. Пошук всіх треф від 9 і більше.')
console.log(cards1.filter((card) => card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)));
console.log('');

// 16. Розкладання карт по мастях.
console.log('16. Розкладання карт по мастях.')
const box = cards1.reduce((acc, current) => {
    acc[current.cardSuit].push(current);
    return acc;
}, {spade: [], diamond: [], heart: [], clubs: [], jokers: []});
console.log(box);
console.log('');

// Масив coursesArray.
console.log('Масив coursesArray.')
const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 707,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 808,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 808,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 606,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 606,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray);
console.log('');

// 17. Пошук всіх об'єктів, в modules яких є sass.
console.log('17. Пошук всіх об\'єктів, в modules яких є sass.')
console.log(coursesArray.filter((item) => item.modules.includes('sass')));
console.log('');

//      -*DOCUMENT*-
// 1. Визначення довжини рядка.
const stringLengthInput = document.querySelector('#string-length .input');
const stringLengthResult = document.querySelector('#string-length span');
stringLengthInput.addEventListener('input', () => {
    stringLengthResult.innerText = stringLengthInput.value.length
})

// 2. Переведення літер до верхнього регістру.
const stringUppercaseInput = document.querySelector('#string-uppercase .input');
const stringUppercaseResult = document.querySelector('#string-uppercase span');
stringUppercaseInput.addEventListener('input', () => {
    stringUppercaseResult.innerText = stringUppercaseInput.value.toUpperCase()
})

// 3. Переведення літер до нижнього регістру.
const stringLowercaseInput = document.querySelector('#string-lowercase .input');
const stringLowercaseResult = document.querySelector('#string-lowercase span');
stringLowercaseInput.addEventListener('input', () => {
    stringLowercaseResult.innerText = stringLowercaseInput.value.toLowerCase()
})

// 4. Видалення зайвих пробілів з рядка.
const stringCleanInput = document.querySelector('#string-clean .input');
const stringCleanResult = document.querySelector('#string-clean span');
stringCleanInput.addEventListener('input', () => {
    stringCleanResult.innerText = stringCleanInput.value.split(' ').filter((w) => w.length).join(' ');
})

// 5. Створення масиву слів з рядка.
const stringArrayInput = document.querySelector('#string-array .input');
const stringArrayResult = document.querySelector('#string-array span');
stringArrayInput.addEventListener('input', () => {
    stringArrayResult.innerText = '[\"' + stringArrayInput.value.split(' ').filter(Boolean).join('\", \"') + '\"]'
})

// 6. Перетворення об'єктів масиву у рядки.
const arrayMapInput = document.querySelector('#array-map .input');
const arrayMapResult = document.querySelector('#array-map span');
arrayMapInput.addEventListener('input', () => {
    arrayMapResult.innerText = '["' + arrayMapInput.value.replace(/[[\]]/g, '').split(',').map(num => num.trim()).map(num => String(num)).join('\", \"') + '"]'
})

// 7. Сортування чисел масиву.
const switchBtn1 = document.getElementById("switch-1");
const ascending1 = document.querySelector(".switcher-1 .active");
const descending1 = document.querySelector(".switcher-1 p:not(.active)");
const arraySortInput = document.querySelector('#array-sort .input');
const arraySortResult = document.querySelector('#array-sort span');

function updateResult() {
    const numbers = arraySortInput.value.replace(/[^0-9\-.\s]/g, "").split(' ').filter(str => str !== "").map(Number);
    if (switchBtn1.checked) {
        ascending1.classList.remove("active");
        descending1.classList.add("active");
        numbers.sort((a, b) => b - a);
    } else {
        descending1.classList.remove("active");
        ascending1.classList.add("active");
        numbers.sort((a, b) => a - b);
    }
    arraySortResult.textContent = numbers.join(', ');
}

arraySortInput.addEventListener('input', updateResult);
switchBtn1.addEventListener("change", function () {
    updateResult();
});

// 8. Курси.
const coursesArticle = document.querySelector('#courses');

const switcher1 = document.querySelector('#switch-2');

const ascending2 = document.querySelector(".switcher-2 .active");
const descending2 = document.querySelector(".switcher-2 p:not(.active)");
let sortAscending1 = false;

const minDuration = Math.min(...coursesArray.map(course => course.hourDuration));
const maxDuration = Math.max(...coursesArray.map(course => course.hourDuration));

let inputLeft1 = document.getElementById("input-left-1");
inputLeft1.min = minDuration;
inputLeft1.max = maxDuration;
inputLeft1.value = minDuration;

let inputRight1 = document.getElementById("input-right-1");
inputRight1.min = minDuration;
inputRight1.max = maxDuration;
inputRight1.value = maxDuration;

const uniqueModules = new Set();

const modulesDiv = document.querySelector('.checkbox');

let active = document.querySelector('.active');
const slider = document.querySelector('#slider');
const navItems = document.querySelectorAll('.nav-item');
const articles = document.querySelectorAll('article');

const resetBtn1 = document.getElementById('reset-btn-1');

coursesArray.forEach(course => {
    course.modules.forEach(module => {
        uniqueModules.add(module);
    });
});

uniqueModules.forEach(module => {
    const checkboxDiv = document.createElement('div');
    checkboxDiv.classList.add('checkbox-1');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = module;
    checkboxDiv.appendChild(checkbox);

    const label = document.createElement('label');
    label.setAttribute('for', module);

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('height', '48');
    svg.setAttribute('viewBox', '0 96 960 960');
    svg.setAttribute('width', '48');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z');

    svg.appendChild(path);
    label.appendChild(svg);
    label.appendChild(document.createTextNode(module));
    checkboxDiv.appendChild(label);

    modulesDiv.appendChild(checkboxDiv);
});

function toggleSortOrder1() {
    sortAscending1 = !sortAscending1;
    renderCourses(coursesArray);
}

switcher1.addEventListener('click', toggleSortOrder1);

modulesDiv.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        renderCourses(coursesArray);
    });
});

resetBtn1.addEventListener('click', () => {
    resetCheckbox1();
    renderCourses(coursesArray);
});

function resetCheckbox1() {
    const inputs = document.querySelectorAll('.checkbox input');
    inputs.forEach((input) => {
        if (input.checked) {
            input.checked = false;
        }
    });
    renderCourses(coursesArray);
}

function renderCourses(coursesArray) {
    coursesArticle.innerHTML = '';

    if (sortAscending1) {
        ascending2.classList.remove("active");
        descending2.classList.add("active");
        coursesArray.sort((a, b) => a.monthDuration - b.monthDuration);
    } else {
        descending2.classList.remove("active");
        ascending2.classList.add("active");
        coursesArray.sort((a, b) => b.monthDuration - a.monthDuration);
    }

    const filteredCourses = coursesArray.filter(course => {
        const selectedModules = Array.from(modulesDiv.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.id);
        return selectedModules.every(module => course.modules.includes(module));
    });

    const sortedCourses = filteredCourses.filter(
        course => course.hourDuration >= inputLeft1.value && course.hourDuration <= inputRight1.value
    )

    sortedCourses.forEach((course) => {
        const courseSection = document.createElement("section");
        const courseTitle = document.createElement("h3");
        const courseDuration = document.createElement("p");
        const courseHours = document.createElement("p");
        const courseModules = document.createElement("ul");

        courseTitle.textContent = course.title;
        courseDuration.textContent = `Тривалість: ${course.monthDuration} місяців`;
        courseHours.textContent = `Годин: ${course.hourDuration}`;
        courseModules.textContent = `Модулі:`;

        course.modules.forEach((module) => {
            const courseModule = document.createElement("li");
            courseModule.textContent = module;
            courseModules.appendChild(courseModule);
        });

        courseSection.appendChild(courseTitle);
        courseSection.appendChild(courseDuration);
        courseSection.appendChild(courseHours);
        courseSection.appendChild(courseModules);
        coursesArticle.appendChild(courseSection);
    });
}

document.addEventListener("DOMContentLoaded", sliderActive, renderCourses(coursesArray));

function sliderActive() {
    slider.style.width = `${active.offsetWidth}px`;
    slider.style.height = `${active.offsetHeight}px`;
    slider.style.top = `${active.offsetTop}px`;
    slider.style.left = `${active.offsetLeft}px`
}

navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
        const navItemClass = navItem.classList[1];
        navItems.forEach(item => {
            item.classList.remove('active')
        })
        articles.forEach((article) => {
            article.classList.remove('active');
            if (article.classList.contains(navItemClass)) {
                article.classList.add('active')
            }
        })
        navItem.classList.add('active');
        active = document.querySelector('.active');
        sliderActive()
    })
})

let thumbLeft = document.querySelector(".slider > .thumb.left");
let thumbRight = document.querySelector(".slider > .thumb.right");

function setLeftValue() {
    let _this = inputLeft1, min = parseInt(_this.min), max = parseInt(_this.max);
    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight1.value) - 1);
    let percent = ((_this.value - min) / (max - min)) * 100;
    thumbLeft.style.left = percent + "%";
}

setLeftValue();

function setRightValue() {
    let _this = inputRight1, min = parseInt(_this.min), max = parseInt(_this.max);
    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft1.value) + 1);
    let percent = ((_this.value - min) / (max - min)) * 100;
    thumbRight.style.right = (100 - percent) + "%";
}

setRightValue();

inputLeft1.addEventListener("input", () => {
    setLeftValue();
    renderCourses(coursesArray);
});

inputRight1.addEventListener("input", () => {
    setRightValue();
    renderCourses(coursesArray);
});

const spanTop = document.querySelector(".top");
const spanBottom = document.querySelector(".bottom");

inputLeft1.addEventListener("input", () => {
    spanTop.innerHTML = inputLeft1.value;
});

inputRight1.addEventListener("input", () => {
    spanBottom.innerHTML = inputRight1.value;
});

spanTop.textContent = minDuration;
spanBottom.textContent = maxDuration;

// 9. Колода карт
const cards2 = [
    // --Red
    {name: 'joker', value: '15', color: 'red', cardSuit: 'joker'},
    // -Hearts
    {name: '2', value: '2', color: 'red', cardSuit: 'heart'},
    {name: '3', value: '3', color: 'red', cardSuit: 'heart'},
    {name: '4', value: '4', color: 'red', cardSuit: 'heart'},
    {name: '5', value: '5', color: 'red', cardSuit: 'heart'},
    {name: '6', value: '6', color: 'red', cardSuit: 'heart'},
    {name: '7', value: '7', color: 'red', cardSuit: 'heart'},
    {name: '8', value: '8', color: 'red', cardSuit: 'heart'},
    {name: '9', value: '9', color: 'red', cardSuit: 'heart'},
    {name: '10', value: '10', color: 'red', cardSuit: 'heart'},
    {name: 'jack', value: '11', color: 'red', cardSuit: 'heart'},
    {name: 'queen', value: '12', color: 'red', cardSuit: 'heart'},
    {name: 'king', value: '13', color: 'red', cardSuit: 'heart'},
    {name: 'ace', value: '14', color: 'red', cardSuit: 'heart'},
    // -Diamond
    {name: '2', value: '2', color: 'red', cardSuit: 'diamond'},
    {name: '3', value: '3', color: 'red', cardSuit: 'diamond'},
    {name: '4', value: '4', color: 'red', cardSuit: 'diamond'},
    {name: '5', value: '5', color: 'red', cardSuit: 'diamond'},
    {name: '6', value: '6', color: 'red', cardSuit: 'diamond'},
    {name: '7', value: '7', color: 'red', cardSuit: 'diamond'},
    {name: '8', value: '8', color: 'red', cardSuit: 'diamond'},
    {name: '9', value: '9', color: 'red', cardSuit: 'diamond'},
    {name: '10', value: '10', color: 'red', cardSuit: 'diamond'},
    {name: 'jack', value: '11', color: 'red', cardSuit: 'diamond'},
    {name: 'queen', value: '12', color: 'red', cardSuit: 'diamond'},
    {name: 'king', value: '13', color: 'red', cardSuit: 'diamond'},
    {name: 'ace', value: '14', color: 'red', cardSuit: 'diamond'},
    // --Black
    {name: 'joker', value: '15', color: 'black', cardSuit: 'jokers'},
    // -Spade
    {name: '2', value: '2', color: 'black', cardSuit: 'spade'},
    {name: '3', value: '3', color: 'black', cardSuit: 'spade'},
    {name: '4', value: '4', color: 'black', cardSuit: 'spade'},
    {name: '5', value: '5', color: 'black', cardSuit: 'spade'},
    {name: '6', value: '6', color: 'black', cardSuit: 'spade'},
    {name: '7', value: '7', color: 'black', cardSuit: 'spade'},
    {name: '8', value: '8', color: 'black', cardSuit: 'spade'},
    {name: '9', value: '9', color: 'black', cardSuit: 'spade'},
    {name: '10', value: '10', color: 'black', cardSuit: 'spade'},
    {name: 'jack', value: '11', color: 'black', cardSuit: 'spade'},
    {name: 'queen', value: '12', color: 'black', cardSuit: 'spade'},
    {name: 'king', value: '13', color: 'black', cardSuit: 'spade'},
    {name: 'ace', value: '14', color: 'black', cardSuit: 'spade'},
    // -Clubs
    {name: '2', value: '2', color: 'black', cardSuit: 'clubs'},
    {name: '3', value: '3', color: 'black', cardSuit: 'clubs'},
    {name: '4', value: '4', color: 'black', cardSuit: 'clubs'},
    {name: '5', value: '5', color: 'black', cardSuit: 'clubs'},
    {name: '6', value: '6', color: 'black', cardSuit: 'clubs'},
    {name: '7', value: '7', color: 'black', cardSuit: 'clubs'},
    {name: '8', value: '8', color: 'black', cardSuit: 'clubs'},
    {name: '9', value: '9', color: 'black', cardSuit: 'clubs'},
    {name: '10', value: '10', color: 'black', cardSuit: 'clubs'},
    {name: 'jack', value: '11', color: 'black', cardSuit: 'clubs'},
    {name: 'queen', value: '12', color: 'black', cardSuit: 'clubs'},
    {name: 'king', value: '13', color: 'black', cardSuit: 'clubs'},
    {name: 'ace', value: '14', color: 'black', cardSuit: 'clubs'},
];

const cardsArticle = document.querySelector('#cards');

const switcher2 = document.querySelector('#switch-3');

const ascending3 = document.querySelector(".switcher-3 .active");
const descending3 = document.querySelector(".switcher-3 p:not(.active)");
let sortAscending2 = false;

const minValue = Math.min(...cards2.map(card => card.value));
const maxValue = Math.max(...cards2.map(card => card.value));

let inputLeft2 = document.getElementById("input-left-2");
inputLeft2.min = minValue;
inputLeft2.max = maxValue;
inputLeft2.value = minValue;

let inputRight2 = document.getElementById("input-right-2");
inputRight2.min = minValue;
inputRight2.max = maxValue;
inputRight2.value = maxValue;

const uniqueNames = new Set();
const uniqueValues = new Set();
const uniqueColors = new Set();
const uniqueSuits = new Set();

const checkboxesDiv = document.querySelector('.checkbox');

const resetBtn2 = document.getElementById('reset-btn-2');

cards2.forEach(name => {
    uniqueNames.add(name);
});

cards2.forEach(value => {
    uniqueValues.add(value);
});

cards2.forEach(color => {
    uniqueColors.add(color);
});

cards2.forEach(cardSuit => {
    uniqueSuits.add(cardSuit);
});

// uniqueNames.forEach(name => {
//     const checkboxDiv = document.createElement('div');
//     checkboxDiv.classList.add('checkbox-1');
//
//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.id = name;
//     checkboxDiv.appendChild(checkbox);
//
//     const label = document.createElement('label');
//     label.setAttribute('for', name);
//
//     const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//     svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
//     svg.setAttribute('height', '48');
//     svg.setAttribute('viewBox', '0 96 960 960');
//     svg.setAttribute('width', '48');
//
//     const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//     path.setAttribute('d', 'M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z');
//
//     svg.appendChild(path);
//     label.appendChild(svg);
//     label.appendChild(document.createTextNode(name));
//     checkboxDiv.appendChild(label);
//
//     checkboxesDiv.appendChild(checkboxDiv);
// });

// uniqueValues.forEach(value => {
//     const checkboxDiv = document.createElement('div');
//     checkboxDiv.classList.add('checkbox-1');
//
//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.id = value;
//     checkboxDiv.appendChild(checkbox);
//
//     const label = document.createElement('label');
//     label.setAttribute('for', value);
//
//     const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//     svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
//     svg.setAttribute('height', '48');
//     svg.setAttribute('viewBox', '0 96 960 960');
//     svg.setAttribute('width', '48');
//
//     const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//     path.setAttribute('d', 'M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z');
//
//     svg.appendChild(path);
//     label.appendChild(svg);
//     label.appendChild(document.createTextNode(value));
//     checkboxDiv.appendChild(label);
//
//     checkboxesDiv.appendChild(checkboxDiv);
// });

// uniqueColors.forEach(color => {
//     const checkboxDiv = document.createElement('div');
//     checkboxDiv.classList.add('checkbox-1');
//
//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.id = color;
//     checkboxDiv.appendChild(checkbox);
//
//     const label = document.createElement('label');
//     label.setAttribute('for', color);
//
//     const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//     svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
//     svg.setAttribute('height', '48');
//     svg.setAttribute('viewBox', '0 96 960 960');
//     svg.setAttribute('width', '48');
//
//     const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//     path.setAttribute('d', 'M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z');
//
//     svg.appendChild(path);
//     label.appendChild(svg);
//     label.appendChild(document.createTextNode(color));
//     checkboxDiv.appendChild(label);
//
//     checkboxesDiv.appendChild(checkboxDiv);
// });

// uniqueSuits.forEach(suit => {
//     const checkboxDiv = document.createElement('div');
//     checkboxDiv.classList.add('checkbox-1');
//
//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.id = suit;
//     checkboxDiv.appendChild(checkbox);
//
//     const label = document.createElement('label');
//     label.setAttribute('for', suit);
//
//     const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//     svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
//     svg.setAttribute('height', '48');
//     svg.setAttribute('viewBox', '0 96 960 960');
//     svg.setAttribute('width', '48');
//
//     const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//     path.setAttribute('d', 'M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z');
//
//     svg.appendChild(path);
//     label.appendChild(svg);
//     label.appendChild(document.createTextNode(suit));
//     checkboxDiv.appendChild(label);
//
//     checkboxesDiv.appendChild(checkboxDiv);
// });

function toggleSortOrder2() {
    sortAscending2 = !sortAscending2;
    // renderCourses(cards2);
}

switcher2.addEventListener('click', toggleSortOrder2);

checkboxesDiv.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // renderCourses(coursesArray);
    });
});

resetBtn2.addEventListener('click', () => {
    resetCheckbox2();
    // renderCourses(coursesArray);
});

function resetCheckbox2() {
    const inputs = document.querySelectorAll('.checkbox input');
    inputs.forEach((input) => {
        if (input.checked) {
            input.checked = false;
        }
    });
    // renderCourses(coursesArray);
}