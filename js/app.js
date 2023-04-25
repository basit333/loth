// Footer Input Variables
// Get the input and label elements
const footerEmailInput = document.getElementById("email-input");
const footerEmailLabel = document.getElementById("email-label");

// Footer Input
// Add an event listener to the input field
footerEmailInput.addEventListener("input", function () {
  // Check if the input field has a value
  if (footerEmailInput.value.length > 0) {
    // Hide the label
    footerEmailLabel.style.display = "none";
  } else {
    // Show the label
    footerEmailLabel.style.display = "block";
  }
});

// Mobile Navbar
// Mobile Navbar Variables
const navOpenBtn = document.querySelector(".nav__menu--btn-open");
const navCloseBtn = document.querySelector(".nav__menu--btn-close");
const navMobileMenu = document.querySelector(".mobile__nav--links");

navOpenBtn.addEventListener("click", function () {
  navMobileMenu.classList.add("mobile__nav--links-open");
});

navCloseBtn.addEventListener("click", function () {
  navMobileMenu.classList.remove("mobile__nav--links-open");
});

// Cart Variables
const cartBtn = document.querySelector(".nav__cart--btn");
const cartContainer = document.querySelector(".nav__cart--container");
const cartCloseBtn = document.querySelector(".nav__cart--btn-close");

cartBtn.addEventListener("click", function () {
  cartContainer.classList.add("nav__cart--container-open");
});

cartCloseBtn.addEventListener("click", function () {
  cartContainer.classList.remove("nav__cart--container-open");
});
