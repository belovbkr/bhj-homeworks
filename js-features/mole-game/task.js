let deadElement = document.getElementById("dead");
let lostElement = document.getElementById("lost");

let holeElement = Array.from(document.querySelectorAll('.hole'));

function resetGame() {
    deadElement.textContent = 0;
    lostElement.textContent = 0;
}

holeElement.forEach((element, index) => {
    element.addEventListener('click', function() {
        if (holeElement[index].classList.contains('hole_has-mole')) {
            deadElement.textContent++; 
        } else {
            lostElement.textContent++;
        }

        if (Number(deadElement.textContent) === 10) {
            alert('Вы победили!');
            resetGame();
        }

        if (Number(lostElement.textContent) === 5) {
            alert('Вы проиграли!');
            resetGame();
        }
    });
});

// const getHole = index => document.getElementById(`hole${index}`);

// holeElement.forEach((element) => {
//     element.addEventListener('click', function() {
//         for ( i = 0; i < 9; i++) {
            
//             if (getHole(index).classList.contains('hole_has-mole')) {
//                 deadElement.textContent++; 
//             } else {
//                 lostElement.textContent++;
//             }

//             if (Number(deadElement.textContent) === 10) {
//                 alert('Вы победили!');
//                 resetGame();
//             }

//             if (Number(lostElement.textContent) === 5) {
//                 alert('Вы проиграли!');
//                 resetGame();
//             }
            
//         };
//     })
// })

// for ( i = 0; i < 9; i++) {
//     getHole(index).addEventListener('click', function() {
//         if (getHole(index).classList.contains('hole_has-mole')) {
//             deadElement.textContent++; 
//         } else {
//             lostElement.textContent++;
//         }

//         if (Number(deadElement.textContent) === 10) {
//             alert('Вы победили!');
//             resetGame();
//         }

//         if (Number(lostElement.textContent) === 5) {
//             alert('Вы проиграли!');
//             resetGame();
//         }
//     });
// };
