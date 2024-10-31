let gridContainer = document.querySelector('.grid-container');
const container = document.getElementById('container');
let size = 16


buildGrid(size);


const btn = document.getElementsByClassName('question')[0];

btn.addEventListener('click', (event) => {
    removeGrid(size)
    let sizeAsked = prompt("Define the size between 0 and 100");
    alert("Merci Elodie");
    size = sizeAsked
    buildGrid(size);


});

function buildGrid (size) {
    for (let i = 0; i < size*size; i++) {
        let div = document.createElement('div');
        let column = (1 / size) * 100 ;
        div.className = "square-class";
        div.setAttribute('id', 'square-id');
        gridContainer.appendChild(div);
        div.style.flexBasis = column + "%";
    }
    const pixel = document.getElementsByClassName('square-class');

    for (let j = 0; j < pixel.length; j++) {
    pixel[j].addEventListener("mouseover", (event) => {
    let color = Math.floor(Math.random() * 10000);

    event.target.style.backgroundColor = `#${color}`;
    });

}
}





function removeGrid (initsize) {
    for (let k = 0; k < initsize * initsize; k++) {
        const selectId = document.getElementById("square-id");
        selectId.remove();
    }
}

