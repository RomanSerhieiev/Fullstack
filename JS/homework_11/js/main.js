let x = 1;

setTimeout(function () {
    for (let i = 0; i < 100000000; i++) {
        x = 1000;
    }
    console.log(x);
}, 1);

setTimeout(function () {
    x = 2000;
    console.log(x);
}, 1000);

for (let i = 0; i < 100000000; i++) {
    x = 3000;
}

console.log(x);