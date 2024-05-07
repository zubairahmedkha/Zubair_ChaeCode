// non pirmitive (refernce)
console.log("Hello Engineer Zubair khan ");
// stack memory for pirmitive(string etc) data type
// heap memory for non pirmitive(array,object) data type
const Name = "Zubair_khan";
const gameName = new String("Zubair_khan");
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
//find position charater
console.log(gameName.indexOf('i'));
//find chracter position
const newSting = gameName.substring(0, 7);
// substring(start, end) khas start index se end index tak string return karega 
console.log(`substring  ${newSting}`);
const anotherString = gameName.slice(0, 4);
// slice(start, end) khas start index se end index 
console.log(anotherString);
const newStingOne = "  zubair  "
console.log(newStingOne.trim());
console.log(newStingOne);
const url = "http://zubair%111.com"
console.log(url.replace(/%/, ''));
console.log(url.includes('zubair'));
console.log(url.split('%'));
console.log(url.split('%')[1]);
 




