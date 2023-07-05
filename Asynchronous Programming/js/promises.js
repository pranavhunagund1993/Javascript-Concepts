// JAVASCRIPT PROMISES

// WHAT IS A PROMISE ?
// A PROMISE IS A SPECIAL JAVASCRIPT OBJECT WHICH IS USED AS A PLACE HOLDER FOR THE FUTURE RESULT OF AN ASYNCHRONOUS OPERATION.
// A JAVASCRIPT PROMISE, PROMISE A RESULT.
// EVERY PROMISE HAS AN EXECUTER FUNCTION THAT GETS EXECUTED IMMEDIATELY WHEN WE CREATE A PROMISE.
// INITIALLY, WHEN THE PROMISE IS CREATED, IT IS IN PENDING STATE. THE DATA RETURNED BY THE PROMISE IN PENDING STATE IS UNDEFINED.
// THE STATE OF THE PROMISE CHANGES TO SETTLED WHEN THE PROMISE IS EITHER RESOLVED OR REJECTED.
// IF THE PROMISE IS RESOLVED, THEN IT RETURNS THE RESOLVED DATA. OTHERWISE, IF THE PROMISE IS REJECTED IT RETURNS THE REJECTED DATA(i.e SOME ERROR MESSAGE).

// EX-1:
/*
let promise = new Promise(function(resolved, rejected) {
    console.log('executer function executed');
    resolved([10,20,30,40]);
    rejected('Something went wrong');
}); 
console.log(promise);
*/

// EX-2:
// PRODUCING CODE
let promise = new Promise(function(resolved, rejected) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true);
    xhr.send();

    xhr.onload = function() {
        if(xhr.statusText === "OK") {
            resolved(xhr.responseText);
        } else {
            rejected('Something went wrong. Please try again later');
        }
    }
});

// CONSUMING CODE
// APPROACH-1:
promise.then(function(data) {   // HANDLING THE RESOLVED DATA
    console.log(data);
}, function(error) {    // HANDLING THE REJECTED DATA
    console.log(error);
});

// APPROACH-2:
// HANDLING THE RESOLVED DATA
promise.then(function(data) {   
    console.log(data);
});

// HANDLING THE REJECTED DAT
promise.catch(function(error) {   
    console.log(error);
});

// A PROMISE HAS TWO IMPORTANT METHODS:
// 1. then
// 2. catch

// THE then() METHOD TAKES A CALLBACK FUNCTION AS ITS PARAMETER WHICH GETS EXECUTES WHEN THE PROMISE IS RESOLVED. IT WILL ALSI TAKES SECOND OPTIONAL CALLBACK FUNCTION WHICH GETS EXECUTED WHEN THE PROMISE IS REJECTED. 
// IF WE ARE ONLY INTERESTED IN HANDLING ERROR THEN WE CAN PASS null AS FIRST PARAMETER FOR then METHOD AND SECOND CALLBACK FUNCTION TO HANDLE ERROR.
// OR WE CAN USE THE catch() METHOD TO HANDLE THE ERROR ONLY.
