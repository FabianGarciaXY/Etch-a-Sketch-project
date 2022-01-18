
//CREATING  GRID CELLS
const container = document.querySelector('.container');

(function createCells() {
    for (let i = 0; i < 256; i++) {
        let item = document.createElement('div');
        item.classList.add('grid-items');
        container.appendChild(item);
    }
})();

// MANIPULATING GRID CELLS ON MOUSEOVER

const divs = document.querySelectorAll('.grid-items');

function manipulateDivs() {
    for (let div of divs) {
        div.addEventListener('mouseover', (e) => {
            const divStyle = e.target.style;
            divStyle.backgroundColor = '#000';
            divStyle.boxSizing = 'border-box';
        });
    }
}

manipulateDivs();

// ADDING CLEAR && RESIZE BUTTONS && FUNCTIONALLITY
const clearButton = document.querySelector('#clear-button');
const setSquaresButton = document.querySelector('#set-squares');
const interactContent = document.querySelector('.interact-content');
const panel = document.querySelector('.panel-container');
const game = document.querySelector('.game');

// EMERGING REPLAY WINDOW && REPLAY BUTTON && VALUES INPUTS
const resizeWindow = document.createElement('div');
const containerResizeInputs = document.createElement('div');
const numberOfSquaresInput1 = document.createElement('input');
const numberOfSquaresInput2 = document.createElement('div');
const numberOfSquaresQuestion = document.createElement('p');

                /*Adding classes anda attributes*/
numberOfSquaresInput1.setAttribute('id', 'input1');
numberOfSquaresInput2.setAttribute('id', 'input2');
numberOfSquaresInput1.setAttribute('type', 'number');
resizeWindow.classList.add('resize-window');
containerResizeInputs.classList.add('container-resize-inputs')
numberOfSquaresInput1.classList.add('squares-input');
numberOfSquaresInput2.classList.add('squares-input');
numberOfSquaresQuestion.textContent = 'How many items do you want?';

resizeWindow.appendChild(numberOfSquaresQuestion);
containerResizeInputs.appendChild(numberOfSquaresInput1);
containerResizeInputs.appendChild(numberOfSquaresInput2);
resizeWindow.appendChild(containerResizeInputs);
// ---------- End ------------


//  On click CLEAR button
clearButton.addEventListener('click', () => {
    for ( let divItem of divs) {
        divItem.style.backgroundColor = "";
    }
});

// FUNCTION TO GENERATE A SPECIFIC NUMBER SQUARES PER SIDE 

function generateSquares(sideA, sideB) {

    const totalOfSquares = sideA * sideB;
    const divs = document.querySelectorAll('.grid-items')
    console.log(divs);

    if (divs){ 
        for (let div of divs) {
            container.removeChild(div);
        }
    }

    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${sideA}, 1fr)`;

    for (let square = 0; square < totalOfSquares; square ++) {
        let item = document.createElement('div');
        item.classList.add('grid-items');
        container.appendChild(item);
    }

    console.log(manipulateDivs());
}

setSquaresButton.addEventListener('click', () => {
    generateSquares(10, 10);
})

//Temporal reload button
const reloadButton = document.querySelector('#reload-button');
reloadButton.addEventListener('click', () => {
    window.location.reload();
});