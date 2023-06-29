//! ACCESSING AND MANIPULATING THE DOM ELEMENTS

//? ACCESSING THE DOM ELEMENTS

// 1. THE getElementById() METHOD.
// THE getElementById() METHOD RETURNS A WEBPAGE ELEMENT THAT HAS THE ID ATTRIBUTE SAME AS THE ID VALUE SPECIFIED IN getElementById() METHOD.
// THE getElementById() METHOD RETURNS NULL IF NO WEBPAGE ELEMENTIS PRESENT WITH SPECIFIED ID.
// IF MORE THAN ONE ELEMENT WITH THE SAME ID IS PRESENT IN THE WEBPAGE THEN ONLY FIRST ELEMENT WILL BE RETURNED.

let p = document.getElementById('intro');
console.log(p);

let x = document.getElementById('xyz');
console.log(x);

// 2. THE querySelector() METHOD
// THE querySelector() METHOD RETURN THE FIRST WEBPAGE ELEMENT THAT MATCHES A SPECIFIED CSS SELECTOR (ID, CLASSNAME, TAGNAME) IN THE DOCUMENT.
// THE querySelector() METHOD RETURNS NULL IF NO WEBPAGE ELEMENT IS PRESENT WITH SPECIFIED ID, CLASS OR TAG.
// IF MORE THAN ONE ELEMENT WITH THE SAME ID, CLASS OR TAG IS PRESENT IN THE WEBPAGE THEN ONLY FIRST ELEMENT WILL BE RETURNED.

let div = document.querySelector('.list');
console.log(div);

let h1 = document.querySelector('#heading');
// console.log(h1);

let img = document.querySelector('img');
// console.log(img);

//? HOW TO READ WEBPAGE ELEMENT DATA

// textContent PROPERTY IS USED TO READ THE CONTENT OF WEBPAGE ELEMENT.
let pContent = p.textContent;
// console.log(pContent);

// innerHTML => RETURNS THE HTML CONTENT OF A WEBPAGE ELEMENT.
let divContent = div.innerHTML;
// console.log(divContent);

// MODIFYING WEBPAGE CONTENT
document.getElementById('dynamicContent').textContent = "This is a dynamically generated paragraph."

// CHANGINING THE WEBPAGE ELEMENT DYNAMICALLY
div.innerHTML = `
        <table border="1">
            <tr>
                <td>1</td>
                <td>Accessing DOM element</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Modifying DOM element</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Adding new DOM element</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Removing existing DOM element</td>
            </tr>
        </table>`;

