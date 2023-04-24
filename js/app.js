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
