const hiddenElements = document.querySelectorAll(
'.featured,.why-us,.about-preview,.reviews,.cta'
);

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});
});

hiddenElements.forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});
window.addEventListener("load",()=>{

setTimeout(()=>{

const loader = document.getElementById("loader");

if(loader){

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},800);

},1200);

});

}

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},800);

},1200);

});
window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}
// ===========================
// Mobile Menu
// ===========================


if (menuToggle) {
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
}
// ===========================
// Product Search
// ===========================

const searchBox = document.getElementById("searchBox");
const cards = document.querySelectorAll(".card");

if (searchBox) {

searchBox.addEventListener("keyup", function () {

const value = this.value.toLowerCase();

cards.forEach((card) => {

const text = card.innerText.toLowerCase();

if (text.includes(value)) {

card.style.display = "block";

} else {

card.style.display = "none";

}

});

});

}
// ===========================
// Category Filter
// ===========================

const categoryFilter = document.getElementById("categoryFilter");

if (categoryFilter) {

categoryFilter.addEventListener("change", function () {

const category = this.value;

cards.forEach((card) => {

if (category === "all") {

card.style.display = "block";

} else if (card.dataset.category === category) {

card.style.display = "block";

} else {

card.style.display = "none";

}

});

});

}
// ===========================
// Quick View Popup
// ===========================

const quickView = document.getElementById("quickView");
const closePopup = document.getElementById("closePopup");

const productButtons = document.querySelectorAll(".card .hero-btn");

productButtons.forEach((button) => {

button.addEventListener("click", function(e){

e.preventDefault();

const card = this.closest(".card");

const image = card.querySelector("img").src;
const title = card.querySelector("h3").innerText;
const price = card.querySelector("h4").innerText;

document.getElementById("popupImage").src = image;
document.getElementById("popupTitle").innerText = title;
document.getElementById("popupPrice").innerText = price;

quickView.style.display = "flex";

});

});

closePopup.addEventListener("click", function(){

quickView.style.display = "none";

});

window.addEventListener("click", function(e){

if(e.target === quickView){

quickView.style.display = "none";

}

});
// ===========================
// Back To Top
// ===========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

if(window.scrollY > 300){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click", function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

});
// ===========================
// Mobile Menu
// ===========================

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});
// Wishlist

document.querySelectorAll(".wishlist").forEach((heart)=>{

heart.onclick=function(){

this.innerHTML=this.innerHTML=="♡"?"♥":"♡";

};

});
// Scroll Animation

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach((el)=>{
    el.classList.add("fade-up");
    observer.observe(el);
});
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(section=>{
    section.classList.add("fade-up");
    observer.observe(section);
});