// async await IN JAVASCRIPT

// SYNTATIC SUGAR OF PROMISE IN JAVASCRIPT.

// async => EXECUTES A FUNCTION ASYNCHRONOUSLY AND RETURNS A PROMISE.
// await => WAITS FOR A PROMISE TO GET SETTLED. IT WILL BLOCK THE REST OF EXECUTION OF CODE.


// 1. THE FUNCTION RUNS ASYNCHRONOUSLY.
// 2. FUNCTION RETURNS A PROMISE.
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

let displayUserCountry = async function() {
    // GET CURRENT COORDINATION OF USER
    let position = await getPosition()
    let{latitude: lat, longitude: lng} = position.coords;

    // GET INFO RELATED TO CURRENT COORDS OF USER
    let geoResponse = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    let geoData = await geoResponse.json();

    // GET INFO RELATED TO COUNTRY WHERE USER IS EXISTED
    let countryResponse = await fetch(`https://restcountries.com/v3.1/name/` + geoData.country);
    let countryData = await countryResponse.json();

    // DISPLAYING IT IN THE WEBPAGE
    displayCountry(countryData[0]);
    console.log(countryData[0]);
}
displayUserCountry();


// let getCountryInfo = async function() {
//     let response = await fetch('https://restcountries.com/v3.1/name/usa');
//     let data = await response.json();
//     console.log(data);
// }
// console.log(getCountryInfo());
// console.log("main thread executing");