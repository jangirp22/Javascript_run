"use strict";

const name = "Purav"
const myrepoCount = 6

console.log(`My name is ${name} and my repo count is ${myrepoCount}`);

// A new way to define String.

let str1 = new String("PuravP")

console.log(typeof str1);
console.log(str1.toUpperCase());
console.log(str1.charAt(4));
console.log(str1.indexOf('P'));

/*

.substring(a, b): a, b >= 0. If given negative it will ignore and use 0 in place.
.slice(a, b): Can use negative values too.

*/

const newString = "    Purav._   "
console.log(newString.trim());
console.log(newString.trimStart());
console.log(newString.trimEnd());

const url = "https://Purav/Purav%20Jangir"

console.log(url.replace('%20', '_'));
console.log(url.includes('%20'));

const str2 = "Purav-Jangir-IITK"

console.log(str2.split('-'));
