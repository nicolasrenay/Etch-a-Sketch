let gridContainer = document.querySelector('.grid-container');
let size = prompt("Provide the grid size, between 0 and 100 ");




function buildGrid (size) {
    for (let i = 0; i < size; i++) {
        let div = document.createElement('div');
        div.className = "square";
        gridContainer.appendChild(div);
    }
}

buildGrid(size);
