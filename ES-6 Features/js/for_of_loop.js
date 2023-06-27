// JAVASCRIPT FOR...OF LOOP

// FOR..OF LOOP IS USED TO LOOP OVER ANY KIND OF ITERABLES IN JAVASCRIPT.
// IT LOOPS OVER MAPS, SETS AND OTHER DATA STRUCTURES.

// SYNTAX OF FOR...OF LOOP
/* for(variable of iterable) {
     logic
} */

let students = ['John', 'Merry', 'Steve', 'Mark', 'Saran', 'Mike'];

// LOOP OVER AN ARRAY USING FOR...OF
for(let item of students) {
    console.log('Student Name: ' + item);
}

console.log("------------------------------");

// LOOP OVER AN ARRAY USING FOR LOOP
for(let i=0; i<students.length; i++) {
    console.log('Student Name: '+ students[i]);
}

let str = "Hello From JavaScript";

console.log("------------------------------");

// LOOP OVER AN STRING USING FOR...OF LOOP
for(let s of str) {
    console.log(s);
}

//! JAVASCRIPT INTERVIEW QUESTION
// WRITE A FUNCTION TO COUNT THE LENGTH OF A STRING WITHOUT USING LENGTH PROPERTY

function countStringLength(str) {
    let count = 0;
    for(let s of str) {
        count++;
    }
    return count;
}

console.log(countStringLength(str));
// console.log(str.length);
