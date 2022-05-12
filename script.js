const container = document.querySelector('#container');

let gridSize = 16;
let gridSizeFull = gridSize * gridSize;

container.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); 
    grid-template-rows: repeat(${gridSize}, 1fr);`;

for (i = 0; i < gridSizeFull; i++) {
const content = document.createElement('div');
content.classList.add('content');
container.appendChild(content);
}
