
//CREATING  GRID CELLS
const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    let item = document.createElement('div');
    item.classList.add('grid-items');
    container.appendChild(item);
} 

// MANIPULATING GRID CELLS ON MOUSEOVER
const divs = document.querySelectorAll('.grid-items');

for (let div of divs) {
    div.addEventListener('mouseover', (e) => {
        const divStyle = e.target.style;
        divStyle.backgroundColor = '#000';
        divStyle.boxSizing = 'border-box';
    })
}

// ADDING CLEAR && RESIZE BUTTONS AND FUNCTIONALLITY
const clearButton = document.querySelector('#clear-button');
const resizeButton = document.querySelector('#resize-button');
const interactContent = document.querySelector('.interact-content');
const panel = document.querySelector('.panel-container');
const game = document.querySelector('.game');

// CREATING REPLAY WINDOW && REPLAY BUTTON // AND VALUES INPUTS
const resizeWindow = document.createElement('div');
const resizeButtonConf = document.createElement('button');
const containerResizeInputs = document.createElement('div');
                    /* Input */
const numberOfSquaresInput1 = document.createElement('input');
const numberOfSquaresInput2 = document.createElement('input');
const numberOfSquaresQuestion = document.createElement('p');

numberOfSquaresInput1.setAttribute('id', 'input1');
numberOfSquaresInput2.setAttribute('id', 'input2');
numberOfSquaresInput1.setAttribute('type', 'number');
numberOfSquaresInput2.setAttribute('type', 'number');
console.log(numberOfSquaresInput1, numberOfSquaresInput2);

resizeWindow.classList.add('resize-window');
containerResizeInputs.classList.add('container-resize-inputs')
resizeButtonConf.classList.add('resize-button-conf');
numberOfSquaresInput1.classList.add('squares-input');
numberOfSquaresInput2.classList.add('squares-input');


resizeButtonConf.textContent = 'Resize';
numberOfSquaresQuestion.textContent = 'How many items do you want?';

resizeWindow.appendChild(numberOfSquaresQuestion);
containerResizeInputs.appendChild(numberOfSquaresInput1);
containerResizeInputs.appendChild(numberOfSquaresInput2);
resizeWindow.appendChild(containerResizeInputs);
resizeWindow.appendChild(resizeButtonConf);

// --- End ---


//  On click CLEAR button
clearButton.addEventListener('click', () => {
    for ( let divItem of divs) {
        divItem.style.backgroundColor = "";
    }
});

// On click RESIZE Button
resizeButton.addEventListener('click', () => {
    setTimeout( () => {
    interactContent.removeChild(panel);
    interactContent.removeChild(game);
    interactContent.appendChild(resizeWindow);

    interactContent.style.margin = 'auto';
    interactContent.style.borderRadius = '6px';
    interactContent.style.height = '250px';
    interactContent.style.width = '60%';
    interactContent.style.margin = '12% auto';
    interactContent.style.backgroundColor = 'cornsilk';
    interactContent.style.boxShadow = '0px 0px 5px 3px white'
    }, 100);
})


resizeButtonConf.addEventListener('click' , function() {
    window.location.reload(); 
    return false;
})
// --- End ---

// 
function logTextInput() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    return console.log(input1, input2);
}
interactContent.addEventListener('click', logTextInput);