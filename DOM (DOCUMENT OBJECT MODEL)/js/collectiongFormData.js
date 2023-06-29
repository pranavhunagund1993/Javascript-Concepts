// COLLECTING FORM DATA
// HOW TO COLLECT DATA FROM TEXT BOXES
let fname = document.getElementById('fname').value;
console.log(fname);

let lname = document.getElementById('lname').value;
console.log(lname);

let email = document.getElementById('email').value;
console.log(email);

// GETTING SELECTED VALUE FROM A DROPDOWN LIST
let country = document.querySelector('#country').value;
console.log(country);

// GETTING VALUE OF CHECKED RADIO BUTTON
let gender = document.querySelector('input[name="gender"]:checked').value;
console.log(gender);

// SELECTING ALL CHECKED CHECKBOXES
let hobbies = [];
let checkboxes = document.getElementsByName("hobbies[]");   // document.getElementByName() returns NodeList in the form of array
for(let i=0; i<checkboxes.length; i++) {
    if(checkboxes[i].checked){
        hobbies.push(checkboxes[i].value)
    }
}

console.log(hobbies);