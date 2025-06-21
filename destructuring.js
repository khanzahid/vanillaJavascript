let obj = {
    name: "John",
    age: 30,
    city: "New York"
}

// let name = obj.name;
// let age = obj.age;
// let city = obj.city;
//
// console.log(name);
// console.log(age);
// console.log(city);

// use destructuring
let {name, age, city} = obj;
console.log(`Name is ${name}, age is ${age}, city is ${city}`);