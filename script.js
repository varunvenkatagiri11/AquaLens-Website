// Sticky Navigation
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    } else {
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
};

// Mobile Menu
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".navbar");

menuBtn.onclick = function () {
    navBar.classList.add("active");
    menuBtn.style.display = "none";
};

cancelBtn.onclick = function () {
    navBar.classList.remove("active");
    menuBtn.style.display = "block";
};

// Fade-in Sections on Scroll
const sections = document.querySelectorAll("section");

const fadeInOnScroll = () => {
    sections.forEach((section) => {
        let sectionTop = section.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("show");
        }
    });
};

// Run on scroll
window.addEventListener("scroll", fadeInOnScroll);

// Trigger fade-in for sections already in view
document.addEventListener("DOMContentLoaded", fadeInOnScroll);
