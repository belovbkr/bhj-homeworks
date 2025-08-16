 let timerElement = document.getElementById("timer");
 let countdown = function () {
    if (Number(timerElement.textContent) === 0) {
        alert('Вы победили в конкурсе!');
    }
    timerElement.textContent -= 1;
 }

 setInterval(countdown, 1000);