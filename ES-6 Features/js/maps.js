// MAP DATA STRUCTURE

// A MAP IS A DATA STRUCTURE THAT CAN BE USED TO STORE VALUES MAPPED TO A KEY.
// JUST LIKE AN OBJECTS, THE DATA IN A MAP IS STORED AS A KEY-VALUE PAIR.

// THE DIFFERENCE BETWEEN AN OBJECT AND A MAP IS THAT, THE KEY IN A MAP CAN BE A VALUE OF ANY DATATYPE.
    // 1. THE KEYS OR PROPERTIES OF AN OBJECT ARE ALWAYS A STRING.
    // 2. THE KEYS IN A MAP CAN BE A VALUE OF ANY DATATYPE. THEY CAN EVEN BE AN OBJECT, AN ARRAY OR ANOTHER MAP.

// MAP CAN BE ITERABLE.
// IT RETURNS UPDATED MAP.

// CREATING A MAP
let question = new Map();

// SET() => ADD ENTRIES TO A MAP
// CHAINING OF SET METHOD
question.set('question', 'In which year ES6 was released?' )
.set(1, 2009)
.set(2, 2013)
.set(3, 2015)
.set(4, 2018)
.set("correct", 3)
.set(true, "Your answer is correct")
.set(false, "The answer you entered is wrong");

console.log(question);

// RETRIVING VALUE FROM A MAP
let ques = question.get('question');
console.log(ques);
console.log(question.get(1));
console.log(question.get(2));
console.log(question.get(3));
console.log(question.get(4));

// PROMPT USED TO ENTER ANSWER
let ans = parseInt(prompt('Please provide your option for the answer.'));
let isCorrect = ans === question.get('correct');    // 3 === 3
console.log(question.get(isCorrect));

// OTHER USEFUL METHODS OF A MAP
// HAS() => RETURNS TRUE IF A MAP HAS A CERTAIN KEY. ELSE RETURNS FALSE.
console.log(question.has('correct'));
console.log(question.has('wrong'));

// SIZE => RETURNS THE NUMBER OF ENTRIES WHICH A MAP HAS
console.log(question.size);

// DELETE => DELETES AN ENTRY IN MAP WITH A GIVEN KEY
question.delete(4);
console.log(question);

// CLEAR => IT DELETES ALL THE ENTRIES FROM A MAP
question.clear();
console.log(question);








