// LOOPING OVER OBJECTS

// OBJECT IS NOT ITERABLE ONLY ARRAY AND STRING ARE ITERABLE.

// WHEN WE WANT TO LOOP OVER AN OBJECT, WE HAVE DIFFERENT OPTIONS DEEPENING UPON WHAT WE WANT TO LOOP OVER. WE CAN LOOP OVER:

// 1. OBJECTS PROPERTY NAME.
// 2. OBJECTS PROPERTY VALUE.
// 3. BOTH ON OBJECTS PROPERTY AND VALUE.

let user = {
    name: "John",
    age: 25,
    occupation: "Teacher",
    gender: "Male"
};

// LOOPING OVER OBJECT PROPERTY NAMES
// KEYS METHOD WILL RETURN AN ARRAY.
// THAT ARRAY WILL BE CONTAINS ALL THE PROPERTIES OF PASSED OBJECT AS ITS ELEMENT.
let properties = Object.keys(user);
console.log(properties);
console.log(properties.length);     // LENGTH PROPERTY IS NUMBER OF PROPERTIES THAT OBJECT HAS

for(let props of properties) {
    console.log(props);
}

// LOOPING OVER OBJECT PROPERTY VALUES
// VALUES METHOD WILL RETURN AN ARRAY.
// THAT ARRAY WILL BE CONTAINS ALL THE PROPERTIES VALUES OF PASSED OBJECT AS ITS ELEMENT.

let value = Object.values(user);
console.log(value);

for(let val of value) {
    console.log(val);
}

// LOOPING OVER BOTH PROPERTY NAME AND PROPERTY VALUE
let entries = Object.entries(user);
console.log(entries);

for(let [key, value] of entries) {
    console.log(`${key} : ${value}`);
}
