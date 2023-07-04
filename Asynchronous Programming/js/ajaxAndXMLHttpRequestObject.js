// AJAX

// 1. AJAX STANDS FOR ASYNCHRONOUS JAVASCRIPT AND XML.
// 2. AJAX IS NOT PROGRAMMING LANGUAGE, BUT IT IS A SET OF EXISTING WEB TECHNOLOGIES.
// 3. AJAX HELPS IN FETCHING DATA ASYNCHRONOUSLY FROM A REMOTE WEB SERVER.
// 4. WHEN THE DATA IS LOADED BY AJAX, IT IS LOADED ASYNCHRONOUSLY WITHOUT PAGE RELOAD / REFRESH.
// 5. MODERN WEBSITES USES JSON FORMAT INSTEAD OF XML, FOR DATA TRANSFER.

// ADVANTAGE OF USING AJAX

// 1. AJAX LOADS DATA DYNAMICALLY INTO A WEBPAGE WITHOUT RELOADING THE COMPLETE WEBPAGE.
// 2. IT PROVIDES BETTER USER EXPERIENCE BY NOT MAKING THE COMPLETE WEBPAGE UNRESPONSIVE WHILE LOADING THE DATA INTO THE WEBPAGE.
// 3. IT SAVES NETWORK BANDWIDTH BECAUSE ONLY A PART OF THE WEBPAGE IS BEING LOADED AND NOT COMPLETE WEB PAGE.
// 4. IT MAKES THE WEBPAGE MORE INTERACTIVE. SINCE THE REQUEST SENT TO THE NETWORK IS DONE IN AN ASYNCHRONOUS WAY. IT WILL NOT MAKE THE WEBPAGE UNRESPONSIVE.

// XMLHttpRequest OBJECT CAN BE USED TO MAKE AJAX CALLS TO REQUEST DATA FROM THE REMOTE SERVER ASYNCHRONOUSLY.

document.getElementById('btn-load')
.addEventListener('click', getProducts);

let div = document.querySelector('.product');

function getProducts() {
    // 1. CREATE AN XMLHttpRequest OBJECT
    let xhr = new XMLHttpRequest();

    // 2. CREATE THE REQUEST
    // METHOD, URL, SYNC/ASYNC, USERID, PASSWORD
    xhr.open('GET', 'products.json', true);

    // 3. SEND THE REQUEST
    xhr.send();

    // WHEN REQUEST IS SENT AND DATA IS NOT COMPLETELY LOADED YET
    xhr.onprogress = function() {
        div.textContent = "Loading...";
    }

    xhr.onload = function() {
        // CONVERT JSON TO JS OBJECTS
        let products = JSON.parse(xhr.responseText);
        let { arrayOfProducts } = products;

        arrayOfProducts.forEach((element) => {
            let html = `
                <div style="display:flex; font-size:14px; height:130px; margin:20px 10px;">
                    <div>
                        <img src="${element.imgUrl}" height="100" width="180">
                    </div>
                    <div style="padding: 5px 10px;">
                        <p>${element.name}</p>
                    </div>
                    <div style="padding: 5px 10px; font-size: 12px">
                        <p>${element.Description}</p>
                    </div>
                    <div style="padding: 5px 10px;">
                        <p>${element.price}</p>
                    </div>
                </div>
            `;

            // div.innerAdjacentHTML("beforeend", html);
            div.innerHTML += html;
        })
    }
}
