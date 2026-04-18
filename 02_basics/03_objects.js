//tyepes of objects creation
// 1. Object literals
// 2. Constructor functions (singleton)

// singleton
// Object.create
// using constructor ; not discussed here

// object literals



const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) ; example of dot notation
// console.log(JsUser["email"]) : // example of bracket notation
// console.log(JsUser[mySym]); // accessing symbol property using bracket notation but without quotes 
// that is a exception for symbol data type
// console.log(JsUser["full name"]) ; 
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
//if you want to prevent any changes to the object, use Object.freeze

JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

// Object.seal(abc); // Prevents adding new properties but allows modification of existing ones
JsUser.naam = "no@gmail.com";
// Object.seal(JsUser) // if you want to prevent adding new properties but allows
// modification of existing properties, use Object.seal


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // string interpolation
    // this keyword refers to the current object (JsUser in this case)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





//Never write a number with a leading zero (like 07). 
// Some JavaScript versions interpret numbers as octal 
// if they are written with a leading zero


const month = 7;
const paddedMonth = month.toString().padStart(2, "0");
console.log(paddedMonth); // "07"
// padStart() method pads the current string with another string (in this case, "0") 
// until the resulting string reaches a given length (2 in this case).