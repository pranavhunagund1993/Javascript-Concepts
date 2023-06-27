// ES6 ENHANCEMENTS IN OBJECT LITERAL SYNTAX

let workingDays = ["Mon", "Tue", "Wed", "Thu", "Fri"];

let shift = {
    Mon: "10Am - 7PM",
    Tue: "10Am - 7PM",
    Wed: "10Am - 7PM",
    Thu: "10Am - 7PM",
    Fri: "10Am - 7PM",
};

// 1. VARIABLES ARE ASSIGNED IMPLICITELY TO THE PROPERTISED WITH SAME NAME.
// IF WE ARE NOT ASSIGNED ANY VALUES TO THAT PROPERTY EXPLICITELY.

// 2. ENHANCEMENT IN THE WAY WE CREATE METHODS FOR AN OBJECT.

// 3. JAVASCRIPT EXPRESSIONS CAN BE USED AS A PROPERTY FOR AN OBJECT.

let employee = {
    id: 100,
    name: "John",
    birthYear: 1993,
    workingDays,
    shift,

    calculateAge() {
        let age = 2023 - this.birthYear;
        console.log(age);
    }
};

console.log(employee);
employee.calculateAge();