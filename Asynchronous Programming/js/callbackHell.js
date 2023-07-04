// CALLBACK HELL

// 1. CALLBACK HELL ALSO KNOWN AS PYRAMID OF DOOM, IS AN ANTI PATTERN SEEN IN CODE OF ASYNCHRONOUS PROGRAMMING.(NESTED CALLBACKS)
// 2. MAKES THE CODE LOOK MESSY
// 3. CODE IS LESS MAINTAINABLE AND LESS READABLE.
// 4. MORE PRONE TO BUGS

// EX-1:
setTimeout(function() {
    console.log('1st callback function called');
    setTimeout(function() {
        console.log('2nd callback function called');
        setTimeout(function() {
            console.log('3rd callback function called');
            setTimeout(function() {
                console.log('4th callback function called');
            },2000)
        },3000)
    },4000)
},5000)

// EX-2:

let countriesContainer = document.querySelector('.countries');

function displayCountry(data) {
    let html = `
            <article class="country">
                <img class="country_img" src="${data.flags.png}" />
                <div class="country_data">
                    <h3 class="country_name">${data.name.common}</h3>
                    <h4 class="country_region">${data.region}</h4>
                    <p class="country_row">${((data.population)/1000000).toFixed(2)} M people</p>
                </div>
            </article>
        `;

        countriesContainer.innerHTML += html;
}

function makeAjaxRequest(countryName) {
    // 1. create an XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    // 2. create the request
    xhr.open('GET', "https://restcountries.com/v3.1/name/"+ countryName, true);

    // 3. send the request
    xhr.send();

    return xhr;
}

function getCountry() {
    // MAKE AN AJAX REQUEST FOR USA
    let req1 = makeAjaxRequest("usa")
    req1.addEventListener('load', function() {
        let [data] = JSON.parse(req1.responseText);
        displayCountry(data);  

    // MAKE AN AJAX REQUEST FOR BRAZIL
        let req2 = makeAjaxRequest("brazil")
        req2.addEventListener('load', function() {
            let [data] = JSON.parse(req2.responseText);
            displayCountry(data); 

    // MAKE AN AJAX REQUEST FOR GERMANY
            let req3 = makeAjaxRequest("germany")
            req3.addEventListener('load', function() {
                let [data] = JSON.parse(req3.responseText);
                displayCountry(data); 
            });
        });
    });
}

getCountry();

{/*
<p class="country_row"><span$ class="ion-ios-people"></span${data.population}</p>
<p class="country_row"><span class="ion-ios-mic"></span>${data.languages}</p>
<p class="country_row"><span class="ion-social-usd"></span>${data.currencies}</p> 
*/}



