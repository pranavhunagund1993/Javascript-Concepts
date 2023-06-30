// CUSTOM Prompt MODAL WINDOW
let promptBtn = document.getElementById('btn-prompt');
let promptEl = document.querySelector('.prompt');
let overlayEl = document.querySelector('.overlay');
let promptOk = document.querySelector('#promptOk');
let promptCancel = document.querySelector('#promptCancel');
let input = document.getElementById('input');

function showPrompt() {
    promptEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden');
}

function hidePrompt(event) {
    let value;
    // console.log(event.target.textContent);
    if(event.target.textContent === "OK") {
        value = input.value;
    } else {
        value = null;
    }
    promptEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
    console.log(value);
}

promptBtn.addEventListener('click', showPrompt);
promptOk.addEventListener('click', hidePrompt);
promptCancel.addEventListener('click', hidePrompt);
