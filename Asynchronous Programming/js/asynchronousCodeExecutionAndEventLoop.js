// ASYNCHRONOUS CODE EXECUTION AND EVENT LOOP

    // console.log('Good morning user');
    // setTimeout(function() {
    //     console.log('Hello, World!');
    // }, 2000);
    // console.log('Have a nice day');
    // fetch('https://someurl.com/api/resource')
    // .then(function(response) {
    //     console.log(response);
    // })

// OUTPUT:
// 1. Good morning user
// 2. Have a nice day
// 3. Hello, World!
// 4. response{...}

//! CALLBACK QUEUE VS MICROTASK QUEUE

// A CALLBACK FUNCTION ASSOCIATED WITH AN ASYNCHRONOUS CODE WAITS FOR ITS EXECUTION INSIDE EITHER A CALLBACK QUEUE OR MICROTASK QUEUE.
// MOST OF THE CALLBACK FUNCTIONS ASSOCIATED WITH ASYNCHRONOUS CODE, HAVE TO WAIT FOR THEIR EXECUTION IN THE CALLBACK QUEUE.BUT THERE ARE SOME CALLBACK FUNCTION, FOR EXAMPLE, THE CALLBACK FUNCTIONS ASSOCIATED WITH THE PROMISE WAITS FOR THE EXECUTION IN THE MICROTASK QUEUE.
// THE CALLBACK FUNCTION IN THE MICROTASK QUEUE TAKES PRIORITY OVER THE CALLBACK FUNCTION IN THE CALLBCK QUEUE I.E THE CALLBACK FUNCTIONS IN MICROTASK QUEUE GETS EXECUTED FIRST.

// EX:
console.log('Program starts Here.');
setTimeout(function() {
    console.log('setTimeout callback executed');
},0);
Promise.resolve('Resolved promise data')
.then(function(response) {
    console.log(response);
    for(let i=0; i<1000000000; i++) {}
})
console.log('Program ends Here.');