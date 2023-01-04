// Select the grid-container
const gridContainer = document.querySelector('.grid-container');

// Create variable to set grid size (can be changed later to make larger or smaller grid)
let gridSize = 16;

// Create function to create grid boxes of size (size^2) inside gridContainer
function createGrid(size) {
    // Update the number of gridBoxes per row/column depending on the size input
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    // For each iteration, create a gridBox and append it to the gridContainer
    for (let i = 0; i < (size**2); i++) {
        let gridBox = document.createElement('div');
        gridBox.className = "grid-box";
        gridContainer.appendChild(gridBox);
    }
}

createGrid(gridSize);


