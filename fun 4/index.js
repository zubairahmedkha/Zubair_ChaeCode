import chalk from "chalk";
console.log(chalk.redBright.bold("Hello Engineer zubair"));
const name = "zubair khan";
console.log(name.charAt(2));
// charAt(index) for get the char of string is number per konsa character he
console.log(name.length);
// length for get the length of string
const newName = name.substring(0, 6);
//  substring(start, end) for cut the stirng
console.log(newName);
console.log(name.split("-"));
// piremitve data types stack memeory
// non-primitive data types heap memeory
const score = 400;
console.log(score);
const balance = new Number(100);
console.log(balance.toString().length);
// tostring convert number to string
console.log(balance.toFixed(2));
// tofixed fixed the number of decimal point
const otherNumber = 145.2342;
console.log(otherNumber.toFixed(2));
console.log(otherNumber.toPrecision(4));
// toPrecision fixed the number of digit after decimal point.
const digit = 10000000;
console.log(digit.toLocaleString('en'));
// toLocaleString convert number to string with comma
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math.round(digit));
console.log(Math.max(2, 4, 6));
console.log(Math.min(2, 4, 6));
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));
const min = 10;
const max = 20;
console.log((Math.floor(Math.random() * (max - min) + min)));
