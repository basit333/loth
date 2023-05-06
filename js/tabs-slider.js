// Select the tabs and product container elements
const bestSellerTabs = document.querySelectorAll(".best__sellers--tabs li");
const bestSellerProducts = document.querySelector(".best__sellers--products");
const bestSellerProductContainer = document.querySelector(".best__sellers--product-container");

// Define some variables to track the drag functionality
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let currentIndex = 0;

// Add event listeners to the tabs
if (bestSellerTabs) {
  bestSellerTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(index));
  });
}

// Add event listeners to the product container for touch and mouse events
if (bestSellerProductContainer) {
  bestSellerProductContainer.addEventListener("touchstart", touchStart);
  bestSellerProductContainer.addEventListener("touchmove", touchMove);
  bestSellerProductContainer.addEventListener("touchend", touchEnd);
  bestSellerProductContainer.addEventListener("mousedown", dragStart);
  bestSellerProductContainer.addEventListener("mouseup", dragEnd);
  bestSellerProductContainer.addEventListener("mouseleave", dragEnd);
  bestSellerProductContainer.addEventListener("mousemove", drag);
}

// Function to activate the selected tab
function activateTab(index) {
  currentIndex = index;
  const activeTab = document.querySelector(".best__sellers--tabs li.active");
  activeTab.classList.remove("active");
  bestSellerTabs[currentIndex].classList.add("active");

  const productWidth = bestSellerProducts.children[0].offsetWidth;
  prevTranslate = currentTranslate;
  currentTranslate = -1 * index * productWidth;
  setTransform(currentTranslate);
}

// Function to start the drag functionality
function dragStart(event) {
  event.preventDefault();
  if (event.type === "touchstart") {
    startPos = event.touches[0].clientX;
  } else {
    startPos = event.clientX;
  }
  isDragging = true;
  // Update prevTranslate to the current translate value
  prevTranslate = currentTranslate;
  // Calculate the current index based on the current translate position and product width
  const productWidth = bestSellerProducts.children[0].offsetWidth;
  const newIndex = Math.round(-prevTranslate / productWidth);
  // Set the currentTranslate to the start position of the current product
  currentTranslate = -1 * newIndex * productWidth;
  setTransform(currentTranslate);
}

// Function to end the drag functionality
function dragEnd(event) {
  event.preventDefault();
  isDragging = false;

  // Calculate the final translate position based on the current index and product width
  const productWidth = bestSellerProducts.children[0].offsetWidth;
  const finalTranslate = -1 * currentIndex * productWidth;

  // Set the currentTranslate to the final translate position
  currentTranslate = finalTranslate;
  setTransform(currentTranslate);
}

// Function to handle the drag functionality
function drag(event) {
  event.preventDefault();
  if (isDragging) {
    let currentPos = 0;
    if (event.type === "touchmove") {
      currentPos = event.touches[0].clientX;
    } else {
      currentPos = event.clientX;
    }

    const diff = currentPos - startPos;
    const productWidth = bestSellerProducts.children[0].offsetWidth;

    if (prevTranslate + diff <= 0 && prevTranslate + diff >= -(bestSellerProducts.children.length - 1) * productWidth) {
      currentTranslate = prevTranslate + diff;
      requestAnimationFrame(() => {
        setTransform(currentTranslate);
      });
    }
  }
}

// Functions to handle the touch events
let touchStartX = 0;
let touchEndX = 0;

function touchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function touchMove(event) {
  const currentPos = event.touches[0].clientX;
  const diff = currentPos - touchStartX;
  const productWidth = bestSellerProducts.children[0].offsetWidth;

  if (diff > 0) {
    const numProductsToMove = Math.floor((diff + productWidth / 2) / productWidth);
    const distanceToMove = numProductsToMove * productWidth;
    if (prevTranslate + distanceToMove <= 0) {
      currentTranslate = prevTranslate + distanceToMove;
      requestAnimationFrame(() => {
        setTransform(currentTranslate);
      });
      touchStartX += distanceToMove;
      prevTranslate = currentTranslate;
    }
  } else if (diff < 0) {
    const numProductsToMove = Math.floor((Math.abs(diff) + productWidth / 2) / productWidth);
    const distanceToMove = numProductsToMove * productWidth;
    if (prevTranslate - distanceToMove >= -(bestSellerProducts.children.length - 1) * productWidth) {
      currentTranslate = prevTranslate - distanceToMove;
      requestAnimationFrame(() => {
        setTransform(currentTranslate);
      });
      touchStartX -= distanceToMove;
      prevTranslate = currentTranslate;
    }
  }
}

function touchEnd() {
  prevTranslate = currentTranslate;
}

// Function to update the transform property of the products element
function setTransform(translate) {
  bestSellerProducts.style.transform = `translateX(${translate}px)`;

  // Check if the current index should be updated
  const productWidth = bestSellerProducts.children[0].offsetWidth;
  const newIndex = Math.round(-translate / productWidth);
  const activeTab = document.querySelector(".best__sellers--tabs li.active");

  if (newIndex !== currentIndex) {
    currentIndex = newIndex;

    // Remove the active class from the previous active tab
    if (activeTab) {
      activeTab.classList.remove("active");
    }

    // Add the active class to the new active tab
    const newTab = bestSellerTabs[currentIndex];
    if (newTab) {
      newTab.classList.add("active");
    }
  }
}
