// Get the input and label elements
const emailInput = document.getElementById("email-input");
const emailLabel = document.getElementById("email-label");

// Add an event listener to the input field
emailInput.addEventListener("input", function () {
  // Check if the input field has a value
  if (emailInput.value.length > 0) {
    // Hide the label
    emailLabel.style.display = "none";
  } else {
    // Show the label
    emailLabel.style.display = "block";
  }
});
