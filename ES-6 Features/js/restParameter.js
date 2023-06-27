// THE REST PATTERN AND REST PARAMETER

// THE REST PATTERN OR REST PARAMETER COLLECTS REST OF THE VALUES INTO AN ARRAY OR REST OF THE PROPERTIES INTO AN OBJECT.
// REST PATTERN OR REST PARAMETER IS SREPRESENTED BY (...)
//? REST PARAMETER WILL ALWAYS USED BEFORE ASSIGNMENT OPERATOR BUT SPREAD OPERATOR WILL NOT USED BEFORE ASSIGNMENT OPERATOR.
// REST PARAMETER SHOULD ALWAYS BE A LAST ONE.

// DESTRUCTURING OF ARRAYS
let numbers = [10, 20, 30, 40, 50];
let[a, b, ...others] = numbers;     // REST PATTER ON ARRAY

console.log(a, b, others);

// REST PATTER ON OBJECT
let num = { x:10, y:20, z:30, w:50 };
let{x, y, ...obj} = num;
console.log(x, y, obj);

// REST PARAMETER
function addNumbers(num1, num2, ...num) {
    // let sum = 0;
    let sum = num1 + num2;
    for(let i=0; i<num.length; i++) {
        sum += num[i];
    }
    return sum;
};

console.log(addNumbers(20, 30));
console.log(addNumbers(20, 30, 40, 50));
console.log(addNumbers(20, 30, 40, 50, 100));

