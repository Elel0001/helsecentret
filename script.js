// ************************ menu eksempel fra undervisning  *********************

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});


// ************************ menu end  *********************


//******************* */ carousel med hjælp af ChatGPT

const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
let currentIndex = 0;

function showSlides() {
    slides.forEach((slide, i) => {
        const isVisible = i >= currentIndex && i < currentIndex + 4; // Show four slides at a time and hide the rest
        slide.style.display = isVisible ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex += 4; // Increment by 4 to show four slides
    if( currentIndex >= slides.length)
      currentIndex = 0;
    console.log("Cur. index: " + currentIndex + " Last index: " + (slides.length-1));      
    showSlides();
}

function prevSlide() {
    currentIndex -= 4; // Decrement by 4 to show four slides
    if( currentIndex < 0)
      currentIndex = Math.floor((slides.length-1) / 4) * 4; // show last page
    console.log("Cur. index: " + currentIndex + " Last index: " + (slides.length-1));      
    showSlides();
}

nextArrow.addEventListener('click', nextSlide);
prevArrow.addEventListener('click', prevSlide);

// Show the initial slides
showSlides();

//****************************** */ carousel end


//******************* */ carousel med hjælp af ChatGPT

const carouselMobil = document.querySelector('.carousel_mobil');
const slidesMobil = document.querySelectorAll('.carousel-slide_mobil');
const prevArrowMobil = document.querySelector('.prev-arrow_mobil');
const nextArrowMobil = document.querySelector('.next-arrow_mobil');
let currentIndexM = 0;

function showSlidesMobil() {
    slidesMobil.forEach((slide, i) => {
        const isVisible = i >= currentIndexM && i < currentIndexM + 2; // Show four slides at a time and hide the rest
        slide.style.display = isVisible ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndexM += 2; // Increment by 4 to show four slides
    if( currentIndexM >= slidesMobil.length)
      currentIndexM = 0;
    console.log("Cur. indexM: " + currentIndexM + " Last indexM: " + (slidesMobil.length-1));      
    showSlidesMobil();
}

function prevSlide() {
    currentIndexM -= 2; // Decrement by 4 to show four slides
    if( currentIndexM < 0)
      currentIndexM = Math.floor((slidesMobil.length-1) / 2) * 2; // show last page
    console.log("Cur. indexM: " + currentIndexM + " Last indexM: " + (slides.length-1));      
    showSlidesMobil();
}

nextArrowMobil.addEventListener('click', nextSlide);
prevArrowMobil.addEventListener('click', prevSlide);

// Show the initial slides
showSlides();

//****************************** */ carousel end