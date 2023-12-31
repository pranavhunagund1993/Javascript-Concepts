// EVENT AND EVENT HANDLERS

// EVENT IS SOMETHING THAT HAPPENS TO A WEBPAGE ELEMENT.

// TYPE OF EVENTS:
// AN EVENT IN JAVASCRIPT CAN BE CLASSIFIED INTO TWO TYPES:
// 1. BROWSER SPECIFIC EVENTS
    // BROWSER SPECIFIC EVENTS HAPPENS ON THE BROWSER LIKE - RESIZING BROWSER WINDOW, SCROLLING UP AND DOWN ETC.
//2. DOM SPECIFIC EVENTS
    // DOM SPECIFIC EVENTS HAPPEN ON THE WEBPAGE. FOR EXAMPLE, CLICKING A BUTTON, HOVERING OVER A WEBPAGE ELEMENT, FOCUSING A TEXTBOX ETC.

// HOW TO HANDLE EVENTS IN JAVASCRIPT
// 1. INLINE EVENT HANDLER.
// 2. EVENT HANDLER PROPERTIES.
// 3. USING addEventListener() METHOD

// INLINE EVENT HANDLER
// USING INLINE EVENT HANDLER, YOU CAN REACT TO A DOM EVENT BY: 
    // ADDING AN ATTRIBUTE TO THE HTML ELEMENT FOR WHICH YOU WANT TO HANDLE EVENT.
    // THE ATTRIBUTE NAME MUST BE THE EVENT NAME PREFIXED WITH ON LIKE ONFOCUS, ONCLICK, ONMOUSEOVER.
    // ASSIGN ANY JAVASCRIPT EXPRESSION TO THE ATTRIBUTE WHICH YOU WANT TO EXECUTE WHEN THAT EVENT HAPPENS.

// EVENT HANDLER PROPERTIES
// USING EVENT HANDLER PROPERTIES, YOU CAN REACT TO A DOM EVENT BY:
    // ADDING A PROPERTY TO THE DOM ELEMENT FOR WHICH YOU WANT TO HANDLE EVENT.
    // THE PROPERTY NAME MUST BE THE EVENT NAME PREFIXED WITH ON LIKE ONFOCUS, ONCLICK, ONMOUSEOVER.
    // ASSIGN A JAVASCRIPT FUNCTION TO THE PROPERTY WHICH YOU WANT TO EXECUTE WHEN THAT EVENT HAPPENS.

let lName = document.getElementById('lname');
lName.onfocus = function() {
    lName.style.backgroundColor = "yellow";
}

lName.onblur = function() {
    lName.style.backgroundColor = "white";
}

let h2 = document.querySelector('#registration');
h2.onmouseover = function () {
    h2.style.color = "red";
}

h2.onmouseout = function () {
    h2.style.color = "black";
}

