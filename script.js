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

// Extra rainbow mode
let rainbowMode = false; // Variable to track if rainbow mode is enabled

// Function to toggle rainbow mode
function toggleRainbowMode() {
  rainbowMode = !rainbowMode;
}

// Create a new grid
function generateGridSize(gridSize) {
  const containerDiv = document.querySelector(".container-div");

  // Clear the existing grid
  containerDiv.innerHTML = "";

  // Calculate the width of each square based on the new grid size
  const squareSize = 600 / gridSize;

  // Function to get a random RGB color
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  // Creating mouse enter event
  function mouseEnter(e) {
    e.target.classList.add("hover");
    const currentColor = e.target.style.backgroundColor;
    if (rainbowMode) {
      if (!currentColor || currentColor === "black") {
        e.target.style.backgroundColor = getRandomColor();
      }
    } else {
      e.target.style.backgroundColor = "black";
    }
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

// Function to handle the click on the rainbow mode button
function handleRainbowButtonClick() {
  const button = document.getElementById("rainbow-mode-button");
  toggleRainbowMode();
  if (rainbowMode) {
    button.textContent = "Disable Rainbow Mode";
    // Apply random RGB colors to the existing grid when rainbow mode is enabled
    const squares = document.querySelectorAll(".square-div");
    squares.forEach((square) => {
      square.style.backgroundColor = getRandomColor();
    });
  } else {
    button.textContent = "Enable Rainbow Mode";
  }
}

// Load after HTML is parsed
document.addEventListener("DOMContentLoaded", function () {
  // Initialize grid with default size (16x16)
  generateGridSize(16);
});
