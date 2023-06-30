//! addEventListener METHOD 

// addEventListener METHOD USING PRE-DEFINED FUNCTION.
/* function displayAlert() {
    alert('You clicked on submit button');
}

document.getElementById('btn')
.addEventListener('click', displayAlert); // CALLBACK FUNCTION IS EXECUTED WHEN THE CLICK EVENT HAPPEN.
*/

// addEventListener METHOD USING ANONYMOUS FUNCTION.
document.getElementById('btn')
.addEventListener('click', function() {
    alert('You clicked on submit button');
})

// THIS KEYWORD POINTING TO THE CURRENT INPUT FIELD
document.querySelector('#email')
.addEventListener('focus', function() {
    console.log(this);
    this.style.backgroundColor = "yellow";
});

document.querySelector('#email')
.addEventListener('blur', function() {
    this.style.backgroundColor = "white";
});