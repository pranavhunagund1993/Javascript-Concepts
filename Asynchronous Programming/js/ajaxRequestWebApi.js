// AJAX REQUEST WITH WEB API

// WHAT IS API ?
// 1. API STANDS FOR APPLICATION PROGRAMMING INTERFACE.
// 2. AN API IS A PIECE OF SOFTWARE THAT CAN BE USED BY ANOTHER SOFTWARE IN ORDER TO ALLOW THE APPLICATIONS TO TALK TO EACH OTHER.
let countriesContainer = document.querySelector('.countries');

function getCountry(countryName) {
    // 1. create an XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    // 2. create the request
    xhr.open('GET', "https://restcountries.com/v3.1/name/"+ countryName, true);

    // 3. send the request
    xhr.send();

    xhr.addEventListener('load', function() {
        let [data] = JSON.parse(xhr.responseText);
        console.log(data);

        let html = `
            <article class="country">
                <img class="country_img" src="${data.flags.png}" />
                <div class="country_data">
                    <h3 class="country_name">${data.name.common}</h3>
                    <h4 class="country_region">${data.region}</h4>
                    <p class="country_row">TOTAL POPULATION: ${data.population}</p>
                </div>
            </article>
        `;

        countriesContainer.innerHTML += html;
    })
}

{/*
<p class="country_row"><span$ class="ion-ios-people"></span${data.population}</p>
<p class="country_row"><span class="ion-ios-mic"></span>${data.languages}</p>
<p class="country_row"><span class="ion-social-usd"></span>${data.currencies}</p> 
*/}

getCountry('usa');
getCountry('brazil');
getCountry('germany');
