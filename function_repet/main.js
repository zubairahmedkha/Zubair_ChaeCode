"use strict";
function cuontdown(number) {
    if (number <= 0) {
        console.log("Lift off!");
        return;
    }
    console.log(number);
    cuontdown(number - 1);
}
cuontdown(5);
function sum(a) {
    for (let i = 1; i <= 10; i++) {
        console.log(a * i);
    }
}
sum(3);
