// Recieve user input to generate specific grid size
function gridSizePrompt() {
  const gridSize = prompt("Please input a grid size between 1-100");

  // Handle user canceling the prompt
  if (gridSize === null) {
    return;
  }
  // Input conditions
  if (gridSize >= 1 && gridSize <= 100) {
    generateGridSize(Number(gridSize));
  } else {
    alert("Incorrect grid size value! Enter again...");
  }
}

// Create a new grid
function generateGridSize(gridSize) {
  const containerDiv = document.querySelector(".container-div");

  // Clear the existing grid
  containerDiv.innerHTML = "";

  // Calculate the width of each square based on the new grid size
  const squareSize = 900 / gridSize;

  // Creating mouse hover event
  function mouseEnter(e) {
    e.target.classList.add("hover");
  }

  // Creating mouse leave event
  function mouseLeave(e) {}

  for (let i = 0; i < gridSize * gridSize; i++) {
    const squareDiv = document.createElement("div");

    // Assign squareDiv a class name to style via CSS
    squareDiv.className = "square-div";

    // Set the size of each square
    squareDiv.style.width = squareSize + "px"; // Set the width of the square
    squareDiv.style.height = squareSize + "px"; // Set the height of the square

    // Add event listeners for mouseEnter and mouseLeave
    squareDiv.addEventListener("mouseenter", mouseEnter);
    squareDiv.addEventListener("mouseleave", mouseLeave);

    containerDiv.appendChild(squareDiv);
  }

  // Appending to document
  document.body.appendChild(containerDiv);
}

// Load after HTML is parsed
document.addEventListener("DOMContentLoaded", function () {
  // Initialize grid with default size (16x16)
  generateGridSize(16);
});
