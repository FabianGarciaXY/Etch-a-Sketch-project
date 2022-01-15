
//Creating grid cells
const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    let item = document.createElement('div');
    item.classList.add('grid-items');
    container.appendChild(item);
} 

// Manipulating Grid Cells
const divs = document.querySelectorAll('.grid-items');

for (let div of divs) {
    div.addEventListener('mouseover', (e) => {
        const divStyle = e.target.style;
        divStyle.backgroundColor = 'rgb(200 122 200)';
        divStyle.boxSizing = 'border-box'
    })
}

// Clear button functionality
const button = document.querySelector('button');

const principalContent = document.querySelector('.principal-content');
const panel = document.querySelector('.panel');
const game = document.querySelector('.game')

// Replay window
const replay = document.createElement('div')
replay.classList.add('.replay-window')
const replayButton = document.createElement('button');
replayButton.textContent = 'Replay';
replay.appendChild(replayButton)


button.addEventListener('click', () => {
    for ( let divItem of divs) {
        divItem.style.backgroundColor = "";
    }
    principalContent.removeChild(panel);
    principalContent.removeChild(game);
    principalContent.appendChild(replay)
})
console.log(principalContent)
