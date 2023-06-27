// DESTRUCTURING OBJECTS

let employee = {
    name: "Steve",
    age: 30,
    gender: "Male",
    Area: ["London", "UK"],
    workDetails: { Experience: 5, company: 'Google'}
};

// DESTRUCTURING SYNTAX FOR OBJECTS
// THE VARIABLE NAME AND PROPERTY NAME SHOULD BE SAME WHILE DESTRUCTURING THE OBJECTS.
// DESTRUCTURING IS BASED ON THE REFERENCE.(PROPERTY NAME)

let{name, age, gender} = employee;
console.log(name);
console.log(age);
console.log(gender);

// WE CAN PROVIDE ALIAS NAME FOR THE VARAIBLES
// WE STILL NEED TO REFERENCE THE PROPERTY WHICH WE WANT TO DESTRUCTURING
// let{name: firstName, age: a, gender: gen} = employee;
// console.log(firstName);
// console.log(a);
// console.log(gen);

// let{name: firstName, age: a, gender: gen, lastName = "Smith"} = employee;    // lastName = "Smith" => DEFAULT VALUE
// console.log(firstName);
// console.log(a);
// console.log(gen);
// console.log(lastName);



