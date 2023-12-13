// ************************ menu eksempel fra undervisning + ændringer + hlælp af ChatGPT *********************

const burger = document.querySelector("#burger_forside, .burger");
const nav = document.querySelector("#forside_nav, .underside_nav");
const menu = document.querySelector("#menu_forside, .menu");
const links = document.querySelectorAll("#menu_forside li a, .menu li a");

burger.addEventListener("click", () => {
  console.log("Burger clicked!");
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    console.log("Link clicked!");
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});

// ************************ menu end  *********************

//******************* */ carousel mobil med hjælp af ChatGPT + ændringer ***************

const carouselMobil = document.querySelector(".carousel_mobil");
const slidesMobil = document.querySelectorAll(".carousel-slide_mobil");
const prevArrowMobil = document.querySelector(".prev-arrow_mobil");
const nextArrowMobil = document.querySelector(".next-arrow_mobil");
let currentIndexMobil = 0;

function showSlidesMobil() {
  slidesMobil.forEach((slide, i) => {
    const isVisible = i >= currentIndexMobil && i < currentIndexMobil + 2; // Show two slides at a time and hide the rest
    slide.style.display = isVisible ? "block" : "none";
  });
}

function nextSlideMobil() {
  currentIndexMobil += 2; // Increment by 2 to show four slides
  if (currentIndexMobil >= slidesMobil.length) currentIndexMobil = 0;
  console.log("Cur. index: " + currentIndexMobil + " Last index: " + (slidesMobil.length - 1));
  showSlidesMobil();
}

function prevSlideMobil() {
  currentIndexMobil -= 2; // Decrement by 2 to show four slides
  if (currentIndexMobil < 0) currentIndexMobil = Math.floor((slidesMobil.length - 1) / 2) * 2; // show last page
  console.log("Cur. index: " + currentIndexMobil + " Last index: " + (slidesMobil.length - 1));
  showSlidesMobil();
}

nextArrowMobil.addEventListener("click", nextSlideMobil);
prevArrowMobil.addEventListener("click", prevSlideMobil);

// Show the initial slides
showSlidesMobil();

//******************* */ carousel web med hjælp af ChatGPT + ændringer ***************

const carousel = document.querySelector(".carousel");
 const slides = document.querySelectorAll(".carousel-slide");
 const prevArrow = document.querySelector(".prev-arrow");
 const nextArrow = document.querySelector(".next-arrow");
 let currentIndex = 0;

 function showSlides() {
   slides.forEach((slide, i) => {
     const isVisible = i >= currentIndex && i < currentIndex + 4; // Show four slides at a time and hide the rest
     slide.style.display = isVisible ? "block" : "none";
   });
 }

 function nextSlide() {
   currentIndex += 4; // Increment by 4 to show four slides
   if (currentIndex >= slides.length) currentIndex = 0;
   console.log("Cur. index: " + currentIndex + " Last index: " + (slides.length - 1));
   showSlides();
 }

 function prevSlide() {
   currentIndex -= 4; // Decrement by 4 to show four slides
   if (currentIndex < 0) currentIndex = Math.floor((slides.length - 1) / 4) * 4; // show last page
   console.log("Cur. index: " + currentIndex + " Last index: " + (slides.length - 1));
   showSlides();
 }

 nextArrow.addEventListener("click", nextSlide);
 prevArrow.addEventListener("click", prevSlide);

// Show the initial slides
showSlides();

//****************************** */ carousel end************************