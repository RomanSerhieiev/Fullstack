fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const usersList = document.getElementById('usersList');
        users.forEach(user => {
            const userLink = document.createElement('a');
            userLink.href = `user-details.html?id=${user.id}`;
            userLink.textContent = `${user.id}. ${user.name}`;

            const listItem = document.createElement('li');
            listItem.appendChild(userLink);

            usersList.appendChild(listItem);
        });
    });