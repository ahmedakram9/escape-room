var totalSeconds = 15 * 60;
var timerInterval = null;

function startTimer() {
    timerInterval = setInterval(function () {
        totalSeconds--;

        updateTimerDisplay();

        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            timeUp();
        }
    }, 1000);
}

function updateTimerDisplay() {
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("timeDisplay").innerText =
        minutes + ":" + seconds;
}

function timeUp() {

    document.getElementById("time-up-message").style.display = "block";

    document.getElementById("puzzle-card").style.display = "none";
    document.getElementById("hint-card1").style.display = "none";
    document.getElementById("hint-card2").style.display = "none";
    document.getElementById("hint-card3").style.display = "none";
    document.getElementById("hint-card4").style.display = "none";
    document.getElementById("hint-card5").style.display = "none";
}

function shakePuzzleCard() {
    var puzzleCard = document.querySelector("#main-content .card");
    puzzleCard.classList.remove("shake");
    void puzzleCard.offsetWidth;
    puzzleCard.classList.add("shake");
}

function disableDragging(listSelector) {
    var items = document.querySelectorAll(listSelector + " li");

    items.forEach(function (item) {
        item.draggable = false;
        item.style.cursor = "not-allowed";
        item.style.opacity = "0.8";
    });
}

const sound = new Audio('sound/error.mp3');
const sound1 = new Audio('sound/success.mp3');

function playSound_error() {

    sound.play();
}

function playSound_success() {
    sound1.currentTime = 0;
    sound1.play();
}

function redoMission() {

    localStorage.clear();

    window.location.replace("index.html");
}


startTimer();
