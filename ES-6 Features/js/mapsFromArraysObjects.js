// CREATING MAPS FORM ARRAYS AND OBJECTS

/* let user = new Map([
    ["name", "John"],
    ["age", 25],
    ["gender", "Male"],
    ["occupation", "Teacher"]
]);

// user.set('name', 'John');
// user.set('age', 25);

console.log(user); */

// CONVERT AN OBJECT INTO A MAP
let customer = {
    id: 100,
    name: "Mark",
    gender: "Male",
    city: "London"
};

// 1. OBJECT.ENTRIES() TO CREATE ARRAY FROM THE OBJECT
let customerArray = Object.entries(customer);
console.log(customerArray);

// 2. PASSED THAT ARRAY TO THE CONSTRUCTOR OF THE MAP
let customerMap = new Map(customerArray);
console.log(customerMap);

// CONVERTING A MAP INTO AN ARRAY
let x = [...customerMap];
console.log(x);

// CONVERTING A MAP INTO AN ARRAY WITH ONLY KEYS
let y = [...customerMap.keys()];
console.log(y);

// CONVERTING A MAP INTO AN ARRAY WITH ONLY VLAUES
let z = [...customerMap.values()];
console.log(z);

// LOOPING OVER MAPS
for(let [key, value] of customerMap) {
    console.log(`value for key ${key} is ${value}`);
}