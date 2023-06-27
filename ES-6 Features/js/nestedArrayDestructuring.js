// DESTRUCTURING FOR NESTED ARRAYS

let person = ["John", "Smith", 28, ["London", "UK"]];

let[firstName, lastName, age, [city, country]] = person;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(city);
console.log(country);

// A SIMPLE USE CASE OF ARRAY DESTRUCTURING
function returnTopperStudents() {
    return ["Mark", "Steve", "Mery", "John", "Sarath" ];
}

let[topper1, topper2, topper3] = returnTopperStudents();
console.log(topper1);
console.log(topper2);
console.log(topper3);

