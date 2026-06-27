// =========================
// KARACHICART.OFFICIAL
// SCRIPT.JS
// =========================

// LOADER

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){

setTimeout(() => {

loader.style.display = "none";

},1200);

}

});

// =========================
// BACK TO TOP BUTTON
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if(window.scrollY > 300){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

});

if(topBtn){

topBtn.addEventListener("click", () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

// =========================
// PRODUCT SEARCH
// =========================

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", () => {

const value =
searchInput.value.toLowerCase();

const products =
document.querySelectorAll(".product-card");

products.forEach(product => {

const title =
product.querySelector("h3")
.innerText.toLowerCase();

if(title.includes(value)){

product.style.display = "block";

}else{

product.style.display = "none";

}

});

});

}

// =========================
// CART COUNTER
// =========================

let cart = 0;

const cartCount =
document.getElementById("cartCount");

const addButtons =
document.querySelectorAll(".addCart");

addButtons.forEach(button => {

button.addEventListener("click", () => {

cart++;

cartCount.innerText = cart;

button.innerText = "Added ✓";

button.style.background = "#28a745";

button.style.color = "#fff";

setTimeout(() => {

button.innerText =
"Add To Cart";

button.style.background =
"#d4af37";

button.style.color =
"#000";

},1500);

});

});

// =========================
// CONTACT FORM
// =========================

const form =
document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",
function(e){

e.preventDefault();

alert(
"Thank You! We received your message."
);

form.reset();

});

}

// =========================
// HERO ANIMATION
// =========================

const heroContent =
document.querySelector(".hero-content");

if(heroContent){

heroContent.style.opacity = "0";

heroContent.style.transform =
"translateY(40px)";

setTimeout(() => {

heroContent.style.transition =
"1s";

heroContent.style.opacity = "1";

heroContent.style.transform =
"translateY(0px)";

},500);

}

// =========================
// CATEGORY HOVER EFFECT
// =========================

const categories =
document.querySelectorAll(
".category-card"
);

categories.forEach(card => {

card.addEventListener(
"mouseenter",
() => {

card.style.transform =
"translateY(-10px)";

});

card.addEventListener(
"mouseleave",
() => {

card.style.transform =
"translateY(0px)";

});

});

// =========================
// PRODUCT HOVER EFFECT
// =========================

const cards =
document.querySelectorAll(
".product-card"
);

cards.forEach(card => {

card.addEventListener(
"mouseenter",
() => {

card.style.boxShadow =
"0 0 25px rgba(212,175,55,.4)";

});

card.addEventListener(
"mouseleave",
() => {

card.style.boxShadow =
"none";

});

});

// =========================
// SMOOTH NAVIGATION
// =========================

document.querySelectorAll(
'a[href^="#"]'
).forEach(link => {

link.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// =========================
// CONSOLE MESSAGE
// =========================

console.log(
"KarachiCart.Official Loaded"
);
