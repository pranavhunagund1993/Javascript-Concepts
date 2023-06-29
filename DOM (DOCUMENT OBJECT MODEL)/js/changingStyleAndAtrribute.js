// CHANGING ATTRIBUTE AND STYLE OF WEBPAGE ELEMENT

// HOW TO CHANGE THE ATTRIBUTE VALUE OF A WEBPAGE ELEMENT.
document.querySelector("img").src = "https://picsum.photos/id/240/300/300";
// document.querySelector("img").height = "200";
// document.querySelector("img").width = "200";

// ADD STYLES DYNAMICALLY TO WEBPAGE ELEMENT.
document.getElementById('heading').style.color = "red";
document.querySelector('.list').style.backgroundColor = "yellow";

// ADDING AND REMOVING CLASS FROM A WEBPAGE ELEMENT.

// REMOVING A CLASS FROM A WEBPAGE ELEMENT
// document.querySelector('.header').classList.remove('header');

// ADDING A CLASS TO THE WEBPAGE ELEMENT
document.querySelector('.list').classList.add('dynamic');