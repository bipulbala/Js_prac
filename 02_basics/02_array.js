const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const indie_heros = ["hellboy", "spawn"]

// marvel_heros.push(dc_heros)
// if we use push method to merge arrays , it will an array inside an array , will not spread the elements distinctly
// console.log(marvel_heros);
// even the concat method will not spread the elements distinctly

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros, ...indie_heros]
//(...) it is called spread operator, using that we can merge  arrays
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// using flat() method to flatten nested arrays
// flat(depth) method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// If no depth is specified, it defaults to 1.
// If you want to flatten all levels of nested arrays, you can use flat(Infinity) to flatten it completely.



console.log(Array.isArray("Hitesh"))
//return boolean value indicating whether the value is an array or not
console.log(Array.isArray([1, 2, 3, 4]))
// returns true if the value is an array, false otherwise

console.log(Array.from("Hitesh"))
//.from() returns an array of characters
// it can also convert array-like objects or iterable objects into an array

console.log(Array.from({name: "hitesh"})) // interesting
// it will return an array with a single element which is the object itself
// Array.from() can also take a second argument which is a map function to transform the elements



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// .of() creates a new array with a variable number of arguments, regardless of their type
// it is useful when you want to create an array with specific values without having to use the Array constructor directly
// it can take any number of arguments and create an array from them