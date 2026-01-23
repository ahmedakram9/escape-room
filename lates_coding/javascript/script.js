var puzzleSolved1 = false;
var draggedItem = null;

var hintLevel1 = 0;
document.getElementById("hintBtn1").onclick = showHint1;

enableDragAndDrop();
document.getElementById("submitBtn").onclick = checkPuzzle1;

function enableDragAndDrop() {
    var items = document.querySelectorAll("#sdlc-list li");

    items.forEach(function (currentListItem) {

        currentListItem.addEventListener("dragstart", function () {
            draggedItem = currentListItem;
            document.getElementById("warningline1").innerText = "";
        });

        currentListItem.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        currentListItem.addEventListener("drop", function () {
            if (draggedItem !== this) {
                var temp = this.innerText;
                this.innerText = draggedItem.innerText;
                draggedItem.innerText = temp;
            }
        });

    });
}

function checkPuzzle1() {

    if (puzzleSolved1) {
        alert("This station is already completed.");
        return;
    }

    var correctOrder = [
        "Planning",
        "Analysis",
        "Designing",
        "Development",
        "Testing",
        "Deployment",
        "Maintenance"
    ];

    var items = document.querySelectorAll("#sdlc-list li");

    for (var i = 0; i < correctOrder.length; i++) {
        if (items[i].innerText !== correctOrder[i]) {
            playSound_error();
            shakePuzzleCard();
            document.getElementById("warningline1").innerText = "";
            document.getElementById("warningline1").innerText = "Incorrect order! Try again.";
            return;
        }
    }

    document.getElementById("formula").style.display = "block";
    document.getElementById("submitBtn").style.display = "none";
    document.getElementById("warningline1").innerText = "";
    document.getElementById("warningline1").style.display = "none";
    document.getElementById("codeinput1").style.display = "block";
    document.getElementById("codeinput1btn").style.display = "block";
    disableDragging("#sdlc-list");
    playSound_success();
    document.getElementById("hintBtn1").disabled = true;

    puzzleSolved1 = true;
    document.getElementById("codeinput1btn").onclick = checkdigit1;

}

function checkdigit1() {
    var usercodeInput = document.getElementById("codeinput1").value;
    if (usercodeInput === "2") {
        document.getElementById("codeinput1btn").style.display = "none";
        document.getElementById("nextstationbtn").style.display = "block";
        document.getElementById("code1").innerText = "2";
        document.getElementById("nextstationbtn").onclick = gotonxtpuzzle;
        document.getElementById("next-note").style.display = "block";
        document.getElementById("formula").style.display = "none";
        document.getElementById("warningdigit1").style.display = "none";
        document.getElementById("warningdigit1").innerText = "";
        playSound_success();
    }
    else if (usercodeInput === "") {
        playSound_error();
        shakePuzzleCard();
        document.getElementById("warningdigit1").style.display = "block";
        document.getElementById("warningdigit1").innerText = "Required!";
    }

    else {
        playSound_error();
        shakePuzzleCard();
        document.getElementById("warningdigit1").style.display = "block";
        document.getElementById("warningdigit1").innerText = "Incorrect digit. Try again.";
    }
}

function gotonxtpuzzle() {
    document.getElementById("code1").innerText = "2";
    document.getElementById("stationheading").innerText = "Station 2";
    document.getElementById("station-progress").innerText = "Station 2 of 5";
    document.getElementById("progress-fill").style.width = "40%";
    document.getElementById("puzzle1").style.display = "none";
    document.getElementById("puzzle2").style.display = "block";
    document.getElementById("hint-card1").style.display = "none";
    document.getElementById("hint-card2").style.display = "block";
}

function showHint1() {

    hintLevel1++;
    totalSeconds -= 30;

    if (hintLevel1 === 1) {
        document.getElementById("1hint1").innerText = "Think about what happens before any code is written.";
    }
    else if (hintLevel1 === 2) {
        document.getElementById("1hint2").innerText = "Requirements are analysed before design, and testing happens after development.";
    }
    else if (hintLevel1 === 3) {
        document.getElementById("1hint3").innerText = "The stages follow a logical flow from planning to ongoing maintenance.";
        document.getElementById("hintBtn1").disabled = true;
        document.getElementById("hintBtn1").innerText = "No more hints";
    }
}