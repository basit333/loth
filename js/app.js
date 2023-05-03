/*
------------------------------
    Footer Input Variables
------------------------------
*/
// Get the input and label elements
const footerEmailInput = document.getElementById("email-input");
const footerEmailLabel = document.getElementById("email-label");

/*
------------------------------
        Footer Input
------------------------------
*/
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

/*
------------------------------
        Mobile Navbar
------------------------------
*/
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

/*
------------------------------
        Cart Variables
------------------------------
*/
const cartBtn = document.querySelector(".nav__cart--btn");
const cartContainer = document.querySelector(".nav__cart--container");
const cartCloseBtn = document.querySelector(".nav__cart--btn-close");

cartBtn.addEventListener("click", function () {
  cartContainer.classList.add("nav__cart--container-open");
});

cartCloseBtn.addEventListener("click", function () {
  cartContainer.classList.remove("nav__cart--container-open");
});

/*
------------------------------
          Cart input
------------------------------
*/
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

/*
------------------------------
            FAQ's
------------------------------
*/
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

/*
------------------------------
 Product Details Page Tab
------------------------------
*/
const productTabs = document.querySelectorAll(".product__details-tab");
const productTabContent = document.querySelectorAll(".product__details-tab-content");

productTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs and tab content
    productTabs.forEach((tab) => tab.classList.remove("active"));
    productTabContent.forEach((content) => content.classList.remove("active"));

    // Add active class to the clicked tab
    tab.classList.add("active");

    // Show the corresponding tab content with opacity animation
    const tabId = tab.getAttribute("data-tab");
    const activeTabContent = document.getElementById(tabId);
    activeTabContent.classList.add("active");
  });
});

/*
------------------------------
 Product Details Page Related/Recent Tab
------------------------------
*/
const productTabsItem = document.querySelectorAll(".product__details-tab-item");
const productTabContainer = document.querySelectorAll(".product__details-tab-container");

productTabsItem.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs and tab content
    productTabsItem.forEach((tab) => tab.classList.remove("product__details-tab-item-active"));
    productTabContainer.forEach((content) => content.classList.remove("product__details-tab-container-active"));

    // Add active class to the clicked tab
    tab.classList.add("product__details-tab-item-active");

    // Show the corresponding tab content with opacity animation
    const tabId = tab.getAttribute("data-tab");
    const activeTabContent = document.getElementById(tabId);
    activeTabContent.classList.add("product__details-tab-container-active");
  });
});

/*
---------------------------------
 Product Details Page Colors Btns
---------------------------------
*/
const productCardContainers = document.querySelectorAll(".product__details-tab-product-card");

productCardContainers.forEach((container) => {
  const checkBoxBtns = container.querySelectorAll(".checkbox-btn");

  checkBoxBtns.forEach((checkboxBtn) => {
    checkboxBtn.addEventListener("click", function (event) {
      event.stopPropagation();

      // Remove active class from all checkboxes within the same card
      const checkboxes = container.querySelectorAll(".checkbox-btn");
      checkboxes.forEach((cb) => cb.classList.remove("checkbox-btn-active"));

      // Add active class to the clicked checkbox
      this.classList.add("checkbox-btn-active");
    });
  });
});

/*
---------------------------------
 Product Filter Btn
---------------------------------
*/
const productBtnFilter = document.querySelector(".products__search--filters-btn");
const productFilterContent = document.querySelector(".products__search--filters-content");
const productFilterBtnText = document.querySelector(".products__search--filters-btn-text");
productBtnFilter.addEventListener("click", () => {
  productFilterContent.classList.toggle("products__search--filters-content-active");
  if (productFilterContent.classList.contains("products__search--filters-content-active")) {
    productFilterBtnText.textContent = "Close Filters";
  } else {
    productFilterBtnText.textContent = "Open Filters";
  }
});

/*
---------------------------------
 Product Filter Content Data
---------------------------------
*/
const filterTopBars = document.querySelectorAll(".products__search--filters-content-top-bar");

// Loop through each top bar element and attach click event listeners
filterTopBars.forEach(function (topBar) {
  topBar.addEventListener("click", function () {
    toggleFiltersData(this);
  });
});

// Function to toggle the visibility of filters data and update the images
function toggleFiltersData(element) {
  const filtersData = element.nextElementSibling;
  const filterPlusImg = element.querySelector(".products__search--filters-content-plus-img");
  const filterMinusImg = element.querySelector(".products__search--filters-content-minus-img");

  // Toggle the visibility of filtersData
  if (filtersData.style.display === "none" || filtersData.style.display === "") {
    filtersData.style.display = "block";
    filterPlusImg.style.display = "none";
    filterMinusImg.style.display = "inline-block";
  } else {
    filtersData.style.display = "none";
    filterPlusImg.style.display = "inline-block";
    filterMinusImg.style.display = "none";
  }
}

/*
---------------------------------
 Product Filter Content Material
---------------------------------
*/

// Get all the material buttons
const materialBtns = document.querySelectorAll(".products__search--filters-material-btn");

// Loop through each button and add a click event listener
materialBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Remove the active class from all buttons
    materialBtns.forEach((btn) => {
      btn.classList.remove("products__search--filters-material-btn-active");
    });

    // Add the active class to the clicked button
    this.classList.add("products__search--filters-material-btn-active");
  });
});

/*
----------------------------------
 Product Filter Price Range Slider
----------------------------------
*/
const rangeMin = document.querySelector(".range-min");
const rangeMax = document.querySelector(".range-max");
const inputMin = document.querySelector(".input-min");
const inputMax = document.querySelector(".input-max");

function updateMin() {
  inputMin.value = rangeMin.value;
}

function updateMax() {
  inputMax.value = rangeMax.value;
}

function updateRangeMin() {
  rangeMin.value = inputMin.value;
}

function updateRangeMax() {
  rangeMax.value = inputMax.value;
}

rangeMin.addEventListener("input", updateMin);
rangeMax.addEventListener("input", updateMax);
inputMin.addEventListener("input", updateRangeMin);
inputMax.addEventListener("input", updateRangeMax);
