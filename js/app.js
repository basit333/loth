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

// Cart input
// Get the input element and buttons
const cartInput = document.querySelector(".nav__cart--container-product-input");
const cartMinusBtn = document.querySelector(".nav__cart--container-product-input-minus-btn");
const cartPlusBtn = document.querySelector(".nav__cart--container-product-input-plus-btn");

// Add click event listeners to the buttons
cartMinusBtn.addEventListener("click", decreaseValue);
cartPlusBtn.addEventListener("click", increaseValue);

// Function to decrease the input value
function decreaseValue() {
  let value = parseInt(cartInput.value);
  if (value > cartInput.min) {
    value--;
    cartInput.value = value;
  }
}

// Function to increase the input value
function increaseValue() {
  let value = parseInt(cartInput.value);
  if (value < cartInput.max) {
    value++;
    cartInput.value = value;
  }
}

// FAQ's
const faqs = document.querySelectorAll(".faq");

faqs.forEach((question) => {
  const faqImgPlus = question.querySelector(".faq-plus");
  const faqImgMinus = question.querySelector(".faq-minus");
  const answerBox = question.nextElementSibling;

  question.addEventListener("click", function () {
    const isOpen = answerBox.classList.contains("faq-answer-box-open");

    // Close all other answer boxes
    faqs.forEach((otherQuestion) => {
      if (otherQuestion !== question) {
        const otherAnswerBox = otherQuestion.nextElementSibling;
        const otherFaqImgPlus = otherQuestion.querySelector(".faq-plus");
        const otherFaqImgMinus = otherQuestion.querySelector(".faq-minus");

        otherAnswerBox.classList.remove("faq-answer-box-open");
        otherFaqImgPlus.style.display = "block";
        otherFaqImgMinus.style.display = "none";
      }
    });

    // Toggle current answer box
    answerBox.classList.toggle("faq-answer-box-open", !isOpen);

    // Update icon
    faqImgPlus.style.display = isOpen ? "block" : "none";
    faqImgMinus.style.display = isOpen ? "none" : "block";
  });
});
