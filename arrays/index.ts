// arrays
const marvel_heros = ["thot","Iroman"," spiderman"]
const dc_heros = ["batman","superman","flash"]
const all =marvel_heros.concat(dc_heros);
console.log(all);
const all_heros = [...marvel_heros,...dc_heros]
console.log(all_heros);
// spread operator
const another_arry =[1,2,3,[4,5,6],[7,8,[4,5]]]
let new_array =another_arry.flat(Infinity)
console.log(new_array);


