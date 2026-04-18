let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// suppose let score = 33 ; then typeof will show it as number
//but let score = "33abc" it will show as NaN, it should not be converted 
// "33" => 33
// "33abc" => NaN  (Not a number)
//  true => 1; false => 0
//  null => 0
//  undefined => NaN

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);   12
// console.log(1 + "2");    12
// console.log("1" + 2 + 2); 122
// console.log(1 + 2 + "2");  32

// so basically + operator is used for both addition and concatenation
//but when we use + with string it will concatenate
//when we use + with number it will add
// and if we use + with both numbers and string it will convert number to string and concatenate
/* if it finds a string in the operation, then it will convert (all numbers after that string)  to string and concatenate them */

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study

// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion