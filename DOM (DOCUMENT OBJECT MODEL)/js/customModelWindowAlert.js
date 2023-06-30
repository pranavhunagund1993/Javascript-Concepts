// CUSTOM ALERT MODAL WINDOW

let btnAlert = document.getElementById('btn-alert');
let alertEl = document.querySelector('.alert');
let overlayEl = document.querySelector('.overlay');
let alertOk = document.getElementById('alertOk');

function showAlert() {
    alertEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden');
}

function hideAlert() {
    alertEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
}

btnAlert.addEventListener('click', showAlert);

alertOk.addEventListener('click', hideAlert);