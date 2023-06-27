// OPTIONAL CHAINING IN JAVASCRIPT

// OPTIONAL CHAINING IS A NEW FEATURE IN JAVASCRIPT, INTRODUCED IN ES2020
// THE OPTIONAL CHAINING IS A SAFE WAY TO ACCESS NESTED OBJECT PROPERTIES, EVEN IF AN INTERMEDIATE PROPERTY DOESN'T EXISTS. IT IS REPRESENTED BY ?.
// THE OPTIONAL CHAINING STOPS THE EVALUATION IF VALUE BEFORE ?. IS UNDEFINED OR NULL AND RETURNS UNDEFINED.

let user = {
    name: 'John',
    age: 28,
    gender: 'Male',
    hobbies: null,
    contact: {
        phone: 7894561235,
        email: "john@gmail.com",
        address: {
            street: "10th Main Street",
            area: "Abbey wood",
            city: "London",
            country: "UK"
        }
    }
};

console.log(user.name);                  // John
console.log(user.birthYear);            // undefined
console.log(user.contact.phone);        // 7894561235
console.log(user.contact.city);         // undefined
// console.log(user.contact.city.name);    // TYPE Error: Cannot read properties of undefined (reading 'name')
console.log(user.hobbies);              // null
// console.log(user.hobbies.x);             // TYPE Error: Cannot read properties of null (reading 'x')

// TO AVOID THIS TYPE ERROR
// 1. USING IF...ELSE STATMENTS

/* 
if(user.contact.city === null || user.contact.city === undefined) {
    console.log(undefined);
} else {
    console.log(user.contact.city.name);
}
*/

// 2. USING OPTIONAL CHAINING

//console.log(user.contact.city?.name);     // undefined
//console.log(user.contacts?.city?.name);     // undefined

// USECASE OF OPTIONAL CHAINING
let text = document.querySelector("h2")?.innerText;
console.log(text);











