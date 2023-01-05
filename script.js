// Select the grid-container
const gridContainer = document.querySelector('.grid-container');

// Select the grid size prompt button
const gridSizeButton = document.querySelector('#grid-size-button');


// Create function to create grid boxes of size (size^2) inside gridContainer
function createGrid(size) {
    // Set max gridSize to 100
    if (size > 100) {
        alert('Error: Max grid size is 100. Setting grid size to 100...')
        size = 100;
    };
    // Update the number of gridBoxes per row/column depending on the size input
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // If grid size is changed, this gets rid of the old grid
    let child = gridContainer.lastElementChild; 
    while (child) {
        gridContainer.removeChild(child);            
        child = gridContainer.lastElementChild;
    };

    // For each iteration, create a gridBox and append it to the gridContainer
    for (let i = 0; i < (size**2); i++) {
        let gridBox = document.createElement('div');
        gridBox.className = "grid-box";
        gridContainer.appendChild(gridBox);
    };
}


// Create function that allows for black drawing
function drawInBlack() {
    const gridBoxes = document.querySelectorAll('.grid-box');
    gridBoxes.forEach((gridBox) => {
    gridBox.addEventListener('mouseover', function(e) {
        e.target.style.background = "black";
    });
    });
}

// Initialize grid with 16x16 and black color
function initializeGrid() {
    createGrid(16);
    drawInBlack();
}

// Initialize grid
initializeGrid();

// When button is cliked, prompt for new grid size
gridSizeButton.onclick = function() {
    gridSize = window.prompt('What size grid would you like?');
    createGrid(gridSize);
};