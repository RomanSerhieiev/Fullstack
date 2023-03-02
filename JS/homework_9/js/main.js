// - створити блок.
const block = document.createElement('div');
const body = document.querySelector('body');

// - додати йому класи wrap, collapse, alpha, beta.
block.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі (довільні значення): колір фону, колір тексту, розмір тексту.
block.style.backgroundColor = 'grey';
block.style.color = 'red';
block.style.fontSize = '40px';
block.innerText = 'HOMEWORK #9';

// - додати цей блок в body.
body.appendChild(block);

// - клонувати його повністю, та додати клон в body.
const clone = block.cloneNode(true);
body.appendChild(clone);

// - Є масив:
const menu = ['Main', 'Products', 'About us', 'Contacts'];

// Зробити ul в середині якої будуть лежати елементи масиву (кожен у своєму li).
const list = document.createElement('ul');

for (const item of menu) {
    const listItem = document.createElement('li');
    listItem.innerText = item;
    list.appendChild(listItem);
}

body.appendChild(list);

// - Є масив:
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const item of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.innerText = `Курс: ${item.title}, тривалість: ${item.monthDuration}.`
    body.appendChild(div);
}

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'>,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (const item of coursesAndDurationArray) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    div.classList.add('item');
    h1.classList.add('heading');
    p.classList.add('description');

    h1.innerText = `Курс: ${item.title}`;
    p.innerText = `Тривалість: ${item.monthDuration}.`;

    div.append(h1, p);
    body.appendChild(div);
}

// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться).
const simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

// Проітерувати його, створивши для кожного об'єкту масиву <div class='member'> та наповнити його даними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту.
for (const item of simpsons) {
    const main = document.createElement('div');
    const name = document.createElement('h1');
    const age = document.createElement('i');
    const info = document.createElement('p');
    const img = document.createElement('img');

    main.classList.add('member');

    name.innerText = `${item.name} ${item.surname}`;
    age.innerText = `Вік: ${item.age}`;
    info.innerText = item.info;

    img.setAttribute('alt', `${item.name} photo`);
    img.setAttribute('src', item.photo);

    main.append(name, age, img, info);
    body.appendChild(main);
}

// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png який лежить в папці з поточним файлом
for (const item of coursesArray) {
    const main = document.createElement('main');
    main.classList.add('main');

    const title = document.createElement('h1');
    title.innerText = `Курс: ${item.title}`;
    title.classList.add('h1');

    const duration = document.createElement('div');
    duration.classList.add('duration');

    const monthDuration = document.createElement('div');
    monthDuration.innerText = `Тривалість місяців: ${item.monthDuration}`;
    monthDuration.classList.add('monthDuration');

    const hourDuration = document.createElement('div');
    hourDuration.innerText = `Тривалість годин: ${item.hourDuration}`;
    hourDuration.classList.add('hourDuration');

    const modules = document.createElement('ul');
    modules.classList.add('modules');

    for (const module of item.modules) {
        const list = document.createElement('li');
        list.innerText = module;
        list.classList.add('li');
        modules.appendChild(list);
    }

    duration.append(monthDuration, hourDuration);
    main.append(title, duration, modules);
    body.append(main);
}

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const p = document.createElement('p');
p.setAttribute('id', 'text');
p.innerText = 'Lorem ipsum.';

const btn = document.createElement('button');
btn.innerText = 'Button';

btn.onclick = function () {
    const pText = document.getElementById("text");
    pText.classList.toggle("none");
};

body.append(btn, p);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача.
const form = document.createElement('form');
form.setAttribute('name', 'form');

let input = document.createElement(`input`);
input.setAttribute('type', 'number');
input.setAttribute('name', 'age');

let button = document.createElement('button');
button.innerText = 'Перевірити';

form.onsubmit = function () {
    if (this.age.value < 18) {
        alert('Заборонено');
    } else {
        alert('Дозволено');
    }
};

form.append(input, button);
body.append(form);