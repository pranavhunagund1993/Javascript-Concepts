// THE SPREAD OPERTAOR

// THE SPREAD OPERATOR TAKES IN AN ITERABLE (e.g. ARRAY OR STRING) AND EXPANDS (ELEMENTS OF ARRAY OR CHARACTERS OF STRING) IT INTO INDIVIDUAL ELEMENTS.
// SPREAD OPERATOR IS REPRESENTED BY (...)

// EXPANDING ARRAYS 
let arr = [10, 20, 30];
// console.log(arr[0], arr[1], arr[2]); => USING NORMAL WAY

console.log(...arr);    // USING SPREAD OPERTAOR

// EXPANDING A STRING
let str = "Hello";
console.log(...str);

// USECASE 1: COPYING ARRAY INTO ANOTHER ARRAY
// let newArray = [100,200,arr[0], arr[1], arr[2]];    => USING NORMAL WAY

let newArray = [100,200, ...arr];   //  USING SPREAD OPERATOR
console.log(newArray);

// USECASE 2: PASSING ELEMENTS OF AN ARRAY AS AN ARGUMENT
function addition(num1, num2, num3) {
    return num1+num2+num3;
}

let sum = addition(...arr);
console.log(sum);

// USECASE 3: COMBINATION OF TWO OR MORE ARRAYS INTO A SINGLE ARRAY
let arr1 = [12, 13, 14];
let arr2 = [15, 16];

let arr3 = [...arr1, ...arr2];
console.log(arr3);