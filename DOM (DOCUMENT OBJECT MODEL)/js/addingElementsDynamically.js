// ADDING ELEMENTS DYNAMICALLY TO WEBPAGE

// WITH JAVASCRIPT, WE CAN CREATE AN HTML ELEMENT DYNAMICALLY USING METHODS PROVIDED BY DOM AND WE CAN INSERT THE ELEMENT TO THE WEBPAGE DYNAMICALLY DURING RUNTIME.
// 1. WE CAN CREATE A WEBPAGE ELEMENT.
// 2. WE CAN ADD AN ELEMENT TO A WEBPAGE DYNAMICALLY.
// 3. WE CAN REMOVE AN ELEMENT FROM THE WEBPAGE.
// 4. WE CAN CHANGE THE CONTENT OF A WEBPAGE ELEMENT.

// 1. CREATE A DIV ELEMENT
let div = document.createElement('div');
div.classList.add('impor-update');
div.style.marginTop = "30px";

// 2. CREATE A TEXT CONTENT
// let textNode = document.createTextNode('This is a dynamically generated text content.');
// div.appendChild(textNode);

// CREATE H2 ELEMENT
let h2 = document.createElement('h2');
h2.textContent = "Important Update";
div.appendChild(h2);

// let p = `<p>
//     Here we have an important update for all our student. We are going to have a live free class on Thursday July 23, to discuss about the new features in the latest release of ES2021
// </p>`;

let p = document.createElement('p');
p.textContent = 'Here we have an important update for all our student. We are going to have a live free class on Thursday July 23, to discuss about the new features in the latest release of ES2021';

// div.innerHTML = p;  // innerHTML WILL REPLACES THE EXISTING ELEMENT
div.insertAdjacentElement('beforeend', p);  // IT WILL NOT REPLACE THE EXISTING ELEMENT

// ADD DIV ELEMENT TO WEBPAGE
let containerDiv = document.querySelector('.container');
// containerDiv.appendChild(div);   // THIS DIV ELEMENT IS ADDED TO THE LAST INSIDE THE CONTAINER
let listDiv = document.querySelector('.list');
containerDiv.insertBefore(div, listDiv);    // THIS DIV ELEMENT IS ADDED BEFORE DIV ELEMENT FOLLOWED BY CLASSNAME LIST INSIDE THE CONTAINER
