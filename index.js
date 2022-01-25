// ADDING CLEAR && RESIZE BUTTONS && FUNCTIONALLITY
const clearButton = document.querySelector('#clear-button');
const setSquaresButton = document.querySelector('#set-squares');
const interactContent = document.querySelector('.interact-content');
const panel = document.querySelector('.panel-container');
const game = document.querySelector('.game');

// EMERGING REPLAY WINDOW && REPLAY BUTTON && VALUES INPUTS
const resizeWindow = document.createElement('div');
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
exitFromWindow.classList.add('exitButton');
containerResizeInputs.classList.add('container-resize-inputs')
numberOfSquaresInput1.classList.add('squares-input');
numberOfSquaresInput2.classList.add('squares-input');
numberOfSquaresQuestion.textContent = 'How many items do you want?';
exitFromWindow.textContent = 'X';

resizeWindow.appendChild(exitFromWindow);
resizeWindow.appendChild(numberOfSquaresQuestion);
containerResizeInputs.appendChild(numberOfSquaresInput1);
containerResizeInputs.appendChild(spcBtwInputs);
containerResizeInputs.appendChild(numberOfSquaresInput2);
resizeWindow.appendChild(containerResizeInputs);
resizeWindow.appendChild(setSquaresButton);

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
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = '#000';
        });
    }
};
manipulateDivs();

setSquaresButton.addEventListener('click', () => {
    const numberOfCells = document.querySelector('#input1').value;
    if (numberOfCells < 1) {
        alert('Must be a greater than 0');
        return
    } else if (numberOfCells > 99) {
        alert('Must be a number less than 100');
        return
    }

    createCells(numberOfCells, numberOfCells);
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
const tempButton = document.querySelector('#temp');

document.addEventListener('DOMContentLoaded', () => {
    tempButton.addEventListener('click', () => {
        createModal()
        document.body.style.backgroundColor = 'rgba(143, 131, 74, 0.480)';
    });
})

function createModal() {
    const modal = document.createElement('div');
    modal.classList.add('modalElement');
    modal.textContent = 'Hi';
    interactContent.appendChild(resizeWindow);
}

numberOfSquaresInput1.addEventListener('input', function(){
    numberOfSquaresInput2.textContent = document.querySelector('#input1').value;
})


exitFromWindow.addEventListener('click', () => {
    interactContent.removeChild(resizeWindow);
})