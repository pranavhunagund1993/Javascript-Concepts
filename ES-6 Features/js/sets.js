// ES6 DATA STARUCTURE

// 1. MAP
// 2. SET

// SET DATA STRUCTURE
// A SET IS JUST A COLLECTION OF UNIQUE VALUES.
// A SET WILL NEVER HAVE DUPLICATE ENTRIES.
// A SET CONSTRUCTOR CREATES NEW SET.

// A SET IS DIFFERENT FROM ARRAY IN THE WAY THAT
    // 1. ELEMENTS OF A SET ARE UNIQUE.
    // 2. THE ORDER OF ELEMENT IN THE SET IS IRRELEVANT.

// SET CANNOT BE ACCESSED BY INDEX NUMBER.
// SET CANNOT RETRIEVED.
// SET CAN BE ITERABLE.

// CREATEING A NEW SET
let cities = new Set(["London", "New York", "Mumbai", "London", "Delhi"]);  // VALUES OF SAME DATA TYPES
console.log(cities);    // { "London", "New York", "Mumbai", "Delhi" }

let randomData = new Set([12, true, "Hello", null]);    // VALUES OF DIFFERENT DATA TYPES
console.log(randomData);    // { 12, true, 'Hello', null }

// STRING IS AN ITERABLE
let str = new Set(new String("Hello"));
console.log(str);   // { 'H', 'e', 'l', 'o' }

// PROPERTIES AND METHODS OF SET

// 1. SIZE => RETURNS THE NUMBER OF ELEMENTS IN THE SET.
    console.log(cities.size);

// 2. HAS() => RETURNS TRUE IF A CERTAIN ELEMENT IS PRESENT IN THE SET.
    console.log(cities.has("London"));
    console.log(cities.has("Tokoyo"));

// 3. ADD() => ADDS A NEW UNIQUE ELEMENT TO THE SET.
    cities.add("Tokoyo");
    console.log(cities);

// 4. DELETE() => DELETE AN ELEMENT FORM THE SET.
    cities.delete("Delhi");
    console.log(cities);

// 5. CLEAR() => DELETE ALL THE ELEMENTS OF THE SET.
    // cities.clear();
    // console.log(cities);

// LOOPING OVER SETS
    for(let city of cities) {
        console.log(city);
    }

// USECASE 1: REMOVE DUPLICATE VALUES FROM AN ARRAY
let names = ["John", "Mark", "Merry", "Mark", "Steve", "John"];
let namesSet = new Set(names);
let uniqueNamesArray = [...namesSet]
console.log(uniqueNamesArray);

// COUNTING NUMBER OF UNIQUE CHARACTERS IN A STRING
let str1 = 'This is a string';
let strSet = new Set(str1);
console.log(strSet.size);

