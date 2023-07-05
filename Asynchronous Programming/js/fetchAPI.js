// fetch API

// 1. THE fetch API IS A MODERN INTERFACE THAT ALLOWS YOU TO MAKE HTTP REQUESTS TO SERVERS FROM WEB BROWSERS.
// 2. THE fetch API RETURNS THE REQUESTED DATA AS A PROMISE, AND WE CAN USE then AND catch METHOD ON THAT PROMISE TO HANDLE THE DATA.

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

/* function getCountry(countryName) {
    // MAKE AJAX REQUEST
    let promise1 = fetch("https://restcountries.com/v3.1/name/"+ countryName);
    let promise2 = promise1.then(function(response) {
        console.log(response);
        // json METHOD RETURNS A PROMISE
        return response.json();
    });
    promise2.then(function(data) {
        // console.log(data);
        displayCountry(data[0]);
    })
}

getCountry('usa');
getCountry('germany');
getCountry('brazil');
*/


// IF THE PROMISE IS RESOLVED.
// THE then METHOD IS ATTACHED TO THAT PROMISE WILL BE CALLED.
// TO THE CALLBACK FUNCTION OF then METHOD, PROMISE WILL PASS THE RESOLVED DATA.
// THE CALLBACK FUNCTION OF THE then METHOD IS EXECUTED.

// ANOTHER WAY (WITHOUT ASSIGNING TO THE VARIABLE)
function getCountry(countryName) {
    // MAKE AJAX REQUEST
    fetch("https://restcountries.com/v3.1/name/"+ countryName)
    .then(function(response) {
        console.log(response);
        // json METHOD RETURNS A PROMISE
        return response.json();
    })
    .then(function(data) {
        // console.log(data);
        displayCountry(data[0]);
    })
    .catch(function(error) {
        console.log(error);
    })
}

getCountry('usa');
getCountry('germany');
getCountry('brazil');