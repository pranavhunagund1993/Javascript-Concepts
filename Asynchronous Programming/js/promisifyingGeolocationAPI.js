// PROMISIFYING GEOLOCATION API

// GEOLOCATION API GETS THE CURRENT COORDINATES OF A USER

// GEOLOCATION API IS CALLBACK BASED
// navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
// );

// PROMISIFYING GEOLOCATION API

// 1. get the current coordinates of the user
// 2. get the country in which user is currently staying
// 3. display information related to that country in webpage

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

        countriesContainer.insertAdjacentHTML('beforeend',html);
}

let getPosition = function() {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(
            resolve,
            reject
        );
    });
}

getPosition()
.then(pos => {
    let{latitude: lat, longitude: lng} = pos.coords;
    return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
})
.then(function(response) {
    return response.json();
})
.then(function(data) {
    return fetch(`https://restcountries.com/v3.1/name/` + data.country);
})
.then(function(response) {
    return response.json();
})
.then(function(data) {
    displayCountry(data[0]);
})
.catch(err => console.log(err.message))