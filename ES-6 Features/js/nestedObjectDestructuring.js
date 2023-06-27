// NESTED OBJECT DESTRUCTURING

let employee = {
    name: "Steve",
    lastName: "Clark",
    age: 30,
    gender: "Male",
    Area: ["London", "UK"],
    workDetails: { Experience: 5, company: 'Google'}
};

let{name: firstName, age: a, gender: gen, lastName="Smith", workDetails: {Experience: exp, company}} = employee;
console.log(firstName);
console.log(a);
console.log(gen);
console.log(lastName);
console.log(exp,company);

// MUTATION VARIABLE VALUE USING OBJECT DESTRUCTURING
let x = 100;
let y = 120;

let obj = {x: 10, y: 20};
({x,y} = obj);

console.log(x,y);

// DESTRUCTURING OBJECT RETURNED BY A FUNCTION
function returnObj() {
    return {id: 101, userName: "JS"};
}
let{id, userName} = returnObj();
console.log(id, userName);

// DESTRUCTURING NESTED ARRAY OF AN OBJECT
let{Area: [city, country]} = employee;
console.log(city, country);