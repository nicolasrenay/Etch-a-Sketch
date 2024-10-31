let gridContainer = document.querySelector('.grid-container');
const container = document.getElementById('container');

let size = 16


buildGrid(size);

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
    event.target.style.backgroundColor = "#69fc25";
    });

}
}


const btn = document.getElementsByClassName('question')[0];

btn.addEventListener('click', (event) => {
    removeGrid(size)
    let sizeAsked = prompt("Define the size between 0 and 100");
    alert("Merci Elodie");
    size = sizeAsked
    buildGrid(size);


});

/*
function removeGrid (size) {
    for (let k = 0; k < size*size; k++) {
       const selectDiv = document.getElementById('square-id');
       selectDiv[k].remove();
    }
}

*/

function removeGrid (initsize) {
    for (let k = 0; k < initsize * initsize; k++) {
        const selectId = document.getElementById("square-id");
        selectId.remove();
    }
}

