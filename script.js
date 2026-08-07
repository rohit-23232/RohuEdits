// ===============================
// ROHU EDITS - PREMIUM SLIDER
// ===============================

const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

let current = 0;
let autoSlide;

// Update Active Slide
function updateSlider() {

    slides.forEach((slide, index) => {
        slide.classList.remove("active");

        if (index === current) {
            slide.classList.add("active");
        }
    });

    const activeSlide = slides[current];

    activeSlide.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
    });

}

// Next Slide
function nextSlide() {
    current++;

    if (current >= slides.length) {
        current = 0;
    }

    updateSlider();
}

// Previous Slide
function prevSlide() {
    current--;

    if (current < 0) {
        current = slides.length - 1;
    }

    updateSlider();
}

// Buttons
rightBtn.addEventListener("click", () => {
    nextSlide();
    resetAuto();
});

leftBtn.addEventListener("click", () => {
    prevSlide();
    resetAuto();
});

// Auto Slide
function startAuto() {
    autoSlide = setInterval(nextSlide, 3000);
}

function resetAuto() {
    clearInterval(autoSlide);
    startAuto();
}

// Touch Swipe
let startX = 0;
let endX = 0;

const slider = document.querySelector(".slider");

slider.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", e => {
    endX = e.touches[0].clientX;
});

slider.addEventListener("touchend", () => {

    if (startX - endX > 50) {
        nextSlide();
    }

    if (endX - startX > 50) {
        prevSlide();
    }

    resetAuto();

});

// Keyboard Support
document.addEventListener("keydown", e => {

    if (e.key === "ArrowRight") {
        nextSlide();
        resetAuto();
    }

    if (e.key === "ArrowLeft") {
        prevSlide();
        resetAuto();
    }

});

// Initialize
updateSlider();
startAuto();
