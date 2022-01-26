// ADDING CLEAR && RESIZE BUTTONS && FUNCTIONALLITY
const clearButton = document.querySelector('#clear-button');
const setSquaresButton = document.querySelector('#set-squares');
const interactContent = document.querySelector('.interact-content');
const panel = document.querySelector('.panel-container');
const game = document.querySelector('.game');
let resizeWindowState = 0;

// EMERGING REPLAY WINDOW && REPLAY BUTTON && VALUES INPUTS
const resizeWindow = document.createElement('div');
const resizeWindowContainer = document.createElement('div');
const exitFromWindow = document.createElement('div');
const containerResizeInputs = document.createElement('div');
const spcBtwInputs = document.createElement('div');
const numberOfSquaresInput1 = document.createElement('input');
let numberOfSquaresInput2 = document.createElement('div');
const numberOfSquaresQuestion = document.createElement('p');

                /*Adding classes anda attributes*/
numberOfSquaresInput1.setAttribute('id', 'input1');
numberOfSquaresInput1.setAttribute('type', 'number');
numberOfSquaresInput2.setAttribute('id', 'input2');
spcBtwInputs.textContent = ' x ';
resizeWindow.classList.add('resize-window');
resizeWindowContainer.classList.add('resize-window-container');
exitFromWindow.classList.add('exitButton');
containerResizeInputs.classList.add('container-resize-inputs');
numberOfSquaresInput1.classList.add('squares-input');
numberOfSquaresInput2.classList.add('squares-input');
numberOfSquaresQuestion.textContent = 'How many items do you want?';
exitFromWindow.textContent = 'X';

resizeWindow.appendChild(exitFromWindow);
resizeWindow.appendChild(resizeWindowContainer);
resizeWindowContainer.appendChild(numberOfSquaresQuestion);
containerResizeInputs.appendChild(numberOfSquaresInput1);
containerResizeInputs.appendChild(spcBtwInputs);
containerResizeInputs.appendChild(numberOfSquaresInput2);
resizeWindowContainer.appendChild(containerResizeInputs);
resizeWindowContainer.appendChild(setSquaresButton);

// ---------- End ------------

//CREATING  GRID CELLS
const container = document.querySelector('.container');

createCells();
function createCells(a, b) {

    if (a){
        const totalOfSquares = a * b;
        container.style.display = 'grid';
        container.style.gridTemplateColumns = `repeat(${a}, 1fr)`;

        if(divs) {
            const divs = document.querySelectorAll('.grid-items')
            divs.forEach( (div) => {
            container.removeChild(div);
            })
        }
        for (let item = 0; item < totalOfSquares; item ++) {
            const div = document.createElement('div');
            div.classList.add('grid-items');
            div.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = '#000';
            })
            container.appendChild(div);
        }

    } else {
        for (let i = 0; i < 256; i++) {
            let div = document.createElement('div')
            div.classList.add('grid-items');
            container.appendChild(div);
        }
    }
}

const divs = document.querySelectorAll('.grid-items')
// MANIPULATING GRID CELLS ON MOUSEOVER
function manipulateDivs() {
    const divs = document.querySelectorAll('.grid-items')
    for (let div of divs) {
        
        div.addEventListener('mouseover', divManipulation)
    };
}

function divManipulation(e) {
    e.target.style.backgroundColor = '#000';
}
manipulateDivs();

setSquaresButton.addEventListener('click', () => {
    const numberOfCells = document.querySelector('#input1').value;
    if (numberOfCells < 1) {
        alert('Must be a greater than 0');
        return
    } else if (numberOfCells > 99 || numberOfCells.length > 3) {
        alert('Must be a number less than 100');
        return
    }
    createCells(numberOfCells, numberOfCells);
    interactContent.removeChild(resizeWindow);
    resizeWindowState = 2;
    changeBkgColor();
})

//Temporal reload button
const reloadButton = document.querySelector('#reload-button');
reloadButton.addEventListener('click', () => {
    window.location.reload();
});

//  On click CLEAR button
clearButton.addEventListener('click', () => {
    const divs = document.querySelectorAll('.grid-items');
    for ( let div of divs) {
        div.style.backgroundColor = "";
    }
});


// P E N D I E N T E !!! 
// @https://medium.com/@clergemarvin/how-to-create-a-modal-in-javascript-e9ddbff9869c
// Temp Button 
const resizeButton = document.querySelector('#resize');

document.addEventListener('DOMContentLoaded', () => {
    resizeButton.addEventListener('click', () => {
        const divs = document.querySelectorAll('.grid-items');
        for (let item of divs) { 
            item.removeEventListener('mouseover', divManipulation);
        }
        createModal();
        resizeWindowState = 1;
        changeBkgColor();
    });
})

function createModal() {
    const modal = document.createElement('div');
    modal.classList.add('modalElement');
    interactContent.appendChild(resizeWindow);
}

function changeBkgColor() {
    if (resizeWindowState === 1) {
        document.body.style.backgroundColor = 'rgba(143, 131, 74, 0.480)';
    } else if(resizeWindowState === 2){
        document.body.style.backgroundColor = 'rgba(252, 248, 199, 0.849)';
    }

}

numberOfSquaresInput1.addEventListener('input', function(){
    numberOfSquaresInput2.textContent = document.querySelector('#input1').value;
});

exitFromWindow.addEventListener('click', () => {
    const divs = document.querySelectorAll('.grid-items');
        for (let item of divs) { 
            item.addEventListener('mouseover', divManipulation);
        }
    interactContent.removeChild(resizeWindow);
    resizeWindowState = 2;
    changeBkgColor();

});