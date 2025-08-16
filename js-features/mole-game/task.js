let deadElement = document.getElementById("dead");
let lostElement = document.getElementById("lost");

const click = () =>
    getHole = index => document.getElementById(`hole${index}`);
getHole( index ).onclick = function() {
    if (getHole( index ).className.includes( 'hole_has-mole' )) {
        deadElement.textContent++; 
    } else {
        lostElement.textContent++;
    }
}

let resetGame = function() {
    deadElement = 0;
    lostElement = 0;
}

if (Number(deadElement.textContent) === 10) {
    alert('Вы победили!');
    resetGame();
}

if (Number(lostElement.textContent) === 5) {
    alert('Вы проиграли!');
    resetGame();
}