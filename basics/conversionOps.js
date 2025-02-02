let score = "33"
let error = "33abc" // use "null" and "undefined"
console.log(typeof score);

let scoreInNumber = Number(score)
let errorInNumber = Number(error) 
let temp = String(undefined)

console.log(temp)

// Conversion Functions - Number(), String(), Boolean()

console.log(typeof scoreInNumber);
console.log(typeof errorInNumber);
console.log(errorInNumber);

console.log(+true) // 1
console.log(+""); // 0


/*
Number Conversion -

If the string cannot be converted into Number, it will assign "NaN" value to it & convert the datatype.
null -> 0
undefined -> undefined (but of datatype-> number)

*/

/*
Boolean Conversion -

0 -> false, 1-> true
"" -> false, null -> false, undefined -> false

*/

/*
String Conversion -

"" -> "", null -> null, undefined -> undefined

*/


