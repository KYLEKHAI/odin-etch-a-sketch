// Load after HTML is parsed
document.addEventListener("DOMContentLoaded", function () {
  // Creating 16x16 square divs grid
  const containerDiv = document.querySelector(".container-div");

  // Create size of a grid (16x16)
  let gridSize = 16;

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

    // Add event listeners for mouseEnter and mouseLeave
    squareDiv.addEventListener("mouseenter", mouseEnter);
    squareDiv.addEventListener("mouseleave", mouseLeave);

    containerDiv.appendChild(squareDiv);
  }

  // Appending to document
  document.body.appendChild(containerDiv);
});
