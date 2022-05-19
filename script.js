const container = document.querySelector('#container');

const btn = document.getElementById('button');
btn.addEventListener('click', () => {
  getGridSize();
  draw();
});
  
function getGridSize () {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  let gridSize = +prompt("Please enter grid size, less than 65",'');
  
  while (gridSize > 64) {
    gridSize = +prompt("Please enter grid size, less than 65",'');
  }
  const gridSizeFull = gridSize * gridSize;
  
  container.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); 
    grid-template-rows: repeat(${gridSize}, 1fr);`;

  for (i = 0; i < gridSizeFull; i++) {
  const content = document.createElement('div');
  content.classList.add('content');
  container.appendChild(content);
  }  
}

function draw() {
  let gridElements = document.querySelectorAll('.content');

  gridElements.forEach((element) => {
    element.addEventListener('mouseover', () => {
      element.setAttribute("style", addColor());
    });
  });
}


function addColor() {
  return `background: rgb(0, 0, 0)`;
}


/*
function random(number) {
  return Math.floor(Math.random() * number);
}

function randomColor() {
  return `background: rgb(${random(255)}, ${random(255)} , ${random(255)})`;
}
*/