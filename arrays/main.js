"use strict";
// Arrays
let list = [1, 2, 3, 4, 5, 6,];
// shalow copy deep copy
let heros = ["ali ", "shahrukh khan"];
let heros2 = [...heros];
console.log(list);
list.push(7);
console.log(list);
console.log(list.join());
// slice splice
console.log("a", list);
const list2 = list.slice(2, 5);
console.log(list2);
console.log(list);
console.log("b", list);
const list3 = list.splice(2, 3);
console.log(list3);
console.log("c", list);
