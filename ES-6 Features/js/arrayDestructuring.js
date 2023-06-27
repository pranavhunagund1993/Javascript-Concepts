    //? => DESTRUCTURING IS A SPECIAL ASSIGNMENT SYNTAX IN JAVASCRIPT THAT ALLOWS US TO UNPACK ARRAYS OR OBJECTS INTO BUNCH OF VARIABLES.
    
    /* THERE ARE TWO TYPES OF DESTRUCTURING:
        1. ARRAY DESTRUCTURING
        2. OBJECT DESTRUCTURING
    */

    // ? DESTRUCTURING SYNTAX FOR ARRAYS
        // => IN SIMPLE WORDS, EXTRACTING DATA FROM ARRAYS AND STORE IT IN THE INDIVIDUAL VARIABLE.
        // => ARRAY DESTRUCTURING WILL NOT DESTROY THE ORIGINAL ARRAY. 
        // => ARRAY DESTRUCTURING USES THE POSITION OF THE ELEMENTS.

    let person = ['John', "Smith", 25];

    let[firstName, lastName, age, gender="Male"] = person;  // gender="Male" => DEFAULT VALUE
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(gender);

    //? ARRAY DESTRUCTURING WILL NOT DESTROY THE ORIGINAL ARRAY.
    console.log(person);    

    //? WE SHOULD ALWAYS USE A VALID VARIABLE NAME WHILE DESTRUCTURING.
    // let[123, 456, 10] = person;     // SyntaxError: Invalid destructuring assignment target

    //? DESTRUCTURING FIRST ELEMENT AND SECOND ELEMENT.
    // let[firstName, lastName] = person;
    // console.log(firstName);
    // console.log(lastName);

    //? DESTRUCTURING FIRST ELEMENT AND THIRD ELEMENT.
    // let[firstName, ,age] = person;
    // console.log(firstName);
    // console.log(age);

