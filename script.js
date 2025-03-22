// JavaScript
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toogle");
  const navMenu = document.getElementById("nav-menu");
  const navClose = document.getElementById("nav-close");
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const darkIcon = document.getElementById("dark-icon");
  const lightIcon = document.getElementById("light-icon");

  // Function to toggle the navigation menu
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });

  // Function to close the navigation menu
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });

  // Load the saved theme from local storage
  const currentTheme = localStorage.getItem("theme") || "dark";
  body.classList.add(currentTheme);
  darkIcon.style.display = currentTheme === "dark" ? "inline" : "none";
  lightIcon.style.display = currentTheme === "light" ? "inline" : "none";

  // Function to toggle between light and dark mode
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("bg-gray-800");
    body.classList.toggle("bg-white");
    body.classList.toggle("text-white");
    body.classList.toggle("text-black");

    // Update icon visibility
    darkIcon.style.display = body.classList.contains("bg-gray-800")
      ? "inline"
      : "none";
    lightIcon.style.display = body.classList.contains("bg-white")
      ? "inline"
      : "none";

    // Save the current theme in local storage
    const theme = body.classList.contains("bg-gray-800") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });
});

//Slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let slideInterval = setInterval(nextSlide, 8000);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

document.querySelector(".next").addEventListener("click", () => {
  clearInterval(slideInterval);
  nextSlide();
  slideInterval = setInterval(nextSlide, 8000);
});

document.querySelector(".prev").addEventListener("click", () => {
  clearInterval(slideInterval);
  prevSlide();
  slideInterval = setInterval(nextSlide, 8000);
});

//Animation
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function checkVisibility() {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    if (isElementInViewport(section)) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkVisibility);

checkVisibility();

//Enabling Go to Top

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});
