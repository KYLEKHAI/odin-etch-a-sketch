// Creating 16x16 square divs grid
const containerDiv = document.querySelector(".container-div");

// Create size of a grid (16x16)
let gridSize = 16;

for (let i = 0; i < gridSize * gridSize; i++) {
  const squareDiv = document.createElement("div");
  squareDiv.style.backgroundColor = "MediumPurple";

  // Assign squareDiv a class name to style via CSS
  squareDiv.className = "square-div";
  containerDiv.appendChild(squareDiv);
}

// Appending to document
document.body.appendChild(containerDiv);
