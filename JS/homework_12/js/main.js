fetch('https://jsonplaceholder.typicode.com/users')
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

const params = new URLSearchParams(window.location.search);
const userId = params.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        document.getElementById('id').textContent = user.id;
        document.getElementById('name').textContent = user.name;
        document.getElementById('username').textContent = user.username;
        document.getElementById('email').textContent = user.email;
        document.getElementById('addressStreet').textContent = user.address.street;
        document.getElementById('addressSuite').textContent = user.address.suite;
        document.getElementById('addressCity').textContent = user.address.city;
        document.getElementById('addressZipcode').textContent = user.address.zipcode;
        document.getElementById('addressGeoLat').textContent = user.address.geo.lat;
        document.getElementById('addressGeoLng').textContent = user.address.geo.lng;
        document.getElementById('phone').textContent = user.phone;
        document.getElementById('website').textContent = user.website;
        document.getElementById('companyName').textContent = user.company.name;
        document.getElementById('companyCatchPhrase').textContent = user.company.catchPhrase;
        document.getElementById('companyBs').textContent = user.company.bs;
    });