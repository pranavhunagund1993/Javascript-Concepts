// ADDING ELEMENTS DYNAMICALLY ON CLICK

// 1. CREATE A DIV AND ADD IT TO WEBPAGE
let div = document.createElement('div');
div.classList.add('student-list');

let containerDiv = document.querySelector('.container');
containerDiv.appendChild(div);

// 2. ADD EVENT LISTENER ON SUBMIT BUTTON
let submitBtn = document.getElementById('btn');
submitBtn.addEventListener('click', displayStudentDetail);

// 3. CREATE displayStudentDetail FUNCTION
function displayStudentDetail() {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    // GETTING SELECTED VALUE FROM A DROPDOWN LIST
    let country = document.querySelector('#country').value;
    // GETTING VALUE OF CHECKED RADIO BUTTON
    let gender = document.querySelector('input[name="gender"]:checked').value;

    let source = gender === 'male' ? 'images/male_avatar.png' : 'images/female_avatar.jpg';

    let html = `<div class="card">
                    <img src=${source} height="70" width="70">
                    <div class="student-deatils">
                        <div class="std-name">${fname} ${lname}</div>
                        <div class="std-email"><i>${email}</i></div>
                        <div class="std-country">${country}</div>
                    </div>
                    <div class="div-remove-card">
                        <button class="remove-card">X</button>
                    </div>
                </div>`
    // div.insertAdjacentElement('beforeend', html);
    div.innerHTML += html;
}

