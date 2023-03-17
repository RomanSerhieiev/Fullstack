fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const container = document.getElementById('users-container'); // Отримуємо контейнер для виведення
        users.forEach(user => {
            // Створюємо блок для користувача
            const userBlock = document.createElement('div');
            userBlock.classList.add('user-block');

            // Додаємо в блок інформацію про користувача
            const userId = document.createElement('p');
            userId.innerText = `ID: ${user.id}`;
            userBlock.appendChild(userId);

            const userName = document.createElement('p');
            userName.innerText = `Name: ${user.name}`;
            userBlock.appendChild(userName);

            // Додаємо кнопку для переходу на сторінку з детальною інформацією про користувача
            const userLink = document.createElement('a');
            userLink.href = `user-details.html?id=${user.id}`;
            userLink.innerText = 'Details';
            userBlock.appendChild(userLink);

            // Додаємо блок з користувачем до контейнеру
            container.appendChild(userBlock);
        });
    })
    .catch(error => console.log(error));
