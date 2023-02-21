const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
    document.querySelector("#player").play();
    document.querySelector("#myVideo").play();
});



const timer = 1;
let amountTime = timer * 60;

function calculateTime() {
    const countDown = document.querySelector("#countdown");
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    countDown.textContent = `${minutes} : ${seconds}`;
    amountTime--;

    if(amountTime < 0) {
        stopTimer();
        amountTime = 0;
    }

    function stopTimer() {
        clearInterval(timerId);
            
    }
}

let timerId = setInterval(calculateTime, 1000);