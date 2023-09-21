// Selecting elements
const resultField = document.getElementById("result");
const buttons = document.querySelectorAll("button");
const calculateButton = document.getElementById("calculate");
const clearButton = document.getElementById("clear");
const backButton = document.getElementById("back");

// Adding event listeners to number and operator buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.textContent === "=") {
      calculate();
    } else if (button.textContent === "C") {
      clear();
    } else if (button.textContent === "←") {
      back();
    } else {
      appendToResult(button.textContent);
    }
  });
});

// Function to append clicked button text to the result field
function appendToResult(text) {
  resultField.value += text;
}

// Function to clear the result field
function clear() {
  resultField.value = "";
}

// Function to delete the last character from the result field
function back() {
  resultField.value = resultField.value.slice(0, -1);
}

// Function to perform calculation and display result
function calculate() {
  try {
    const result = eval(resultField.value); // Using eval for simplicity (not recommended for production)
    resultField.value = result;
  } catch (error) {
    resultField.value = "Error";
  }
}

// Clear result field when it's clicked
resultField.addEventListener("click", clear);

// Clear result field on Escape key press
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    clear();
  }
});
