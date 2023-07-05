// // HANDLING REJECTED PROMISES

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

        // countriesContainer.innerHTML += html;
        countriesContainer.insertAdjacentHTML("beforeend",html);
}

function getCountry() {
    // MAKE AJAX REQUEST
    fetch("https://restcountries.com/v3.1/name/usa")
    .then(function(response) {
        if(response.ok === false) {
            throw new Error(`Country not found.(${response.status})`)
        }
        // json METHOD RETURNS A PROMISE
        return response.json();
    })
    .then(function(data) {
        displayCountry(data[0]);
        return fetch("https://restcountries.com/v3.1/name/abc")
    })
    .then(function(response) {
        if(response.ok === false) {
            throw new Error(`Country not found.(${response.status})`)
        }
        return response.json();
    })
    .then(function(data) {
        displayCountry(data[0]);
        return fetch("https://restcountries.com/v3.1/name/germany")
    })
    .then(function(response) {
        if(response.ok === false) {
            throw new Error(`Country not found.(${response.status})`)
        }
        return response.json();
    })
    .then(function(data) {
        displayCountry(data[0]);
    })
    .catch(function(error) { // HANDLING THE REJECTED PROMISES
        console.log(error);
        countriesContainer.insertAdjacentText("beforeend",`Something went wrong, Error message: ${error.message}. Please try again later`)
    })
    .finally(function() {   // finally METHOD EXECUTES WEATHER THE PROMISE IS RESOLVED OR REJECTED.
        console.log("Finally method called");
    }); 
}

document.getElementById('btn-load')
.addEventListener('click', function() {
    getCountry();
})