// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// this way nesting is removed & then accessed in objects


// console.log(regularUser.fullname?.userfullname.firstname);
// question mark is used to check if the property exists or not
// use cases in if you are not sure if the property exists or not
// specially useful in API calls where the data structure might not be consistent


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } this will create an object 
// with obj1 and obj2 as properties

// const obj3 = Object.assign({}, obj1, obj2, obj4)
//object.assign creates a new object by merging the properties of the provided objects
// syntax: Object.assign(target, ...sources)
// Object.assign({}, obj1, obj2, obj3) merges the properties of the source objects into the target object


const obj3 = {...obj1, ...obj2}
// this is the spread operator, it spreads the properties of the objects into a new object
// console.log(obj3);



//this case used in databases where you want to merge the properties of the objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email

//console.log(users[0].email);
console.log(tinderUser);

// console.log(Object.keys(tinderUser));
//it returns an array of the keys of the object

// console.log(Object.values(tinderUser));
//it returns an array of the values of the object

// console.log(Object.entries(tinderUser));
//it returns an array of the key-value pairs of the object

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//it checks if the object has the specified property



// fo rmore information on objects, go to console and write an
// Object.prototype to see all the methods and properties available on the object prototype


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

