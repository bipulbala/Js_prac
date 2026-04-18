// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myheroines = ["supergirl","wonderman"]
console.log(myheroines[1])

myheroines.push("batwoman")
myheroines.unshift("catwoman")
myheroines.shift()
// unshift adds an element to the beginning of the array, it can make the array longer
// push adds an element to the end of the array
// shift removes the first element of the array
// pop removes the last element of the array

console.log(myheroines);

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
//.include returns a boolean valiue 
// indicating whether the array contains a certain element
// console.log(myArr.indexOf(3));

// const newArr = myArr.join(), // which converts the array to a string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(0, 3)
// slice has range (start(inclusive) , end(exclusive)) and returns a new array
// it does not modify the original array
// it returns a shallow copy of a portion of an array into a new array object
console.log(myn1);
console.log("B ", myArr);

// splice manupulates the original array, while slice does not
// slice returns a new array, while splice modifies the original array
const myn2 = myArr.splice(0, 4)
console.log("C ", myArr);
console.log(myn2);

//i.e array.splice(start, deleteCount, item1, item2, ...)
// splice can also add elements to the array at a specific position
// for example splice(2, 0, "item1", "item2")
// splice(i,n) here i is the index where to start, n is the number of elements to delete
// splice has range (start(inclusive), deleteCount) and returns the removed elements