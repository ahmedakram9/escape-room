var puzzleSolved2 = false;
var draggedItem2 = null;

var hintLevel2 = 0;
document.getElementById("hintBtn2").onclick = showHint2;

enableTaskDragAndDrop();

document.getElementById("submitBtn2").onclick = checkPuzzle2;

function enableTaskDragAndDrop() {
    var items = document.querySelectorAll("#task-list li");

    items.forEach(function (item) {

        item.addEventListener("dragstart", function () {
            draggedItem2 = item;
            document.getElementById("warningline2").innerText = "";
        });

        item.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        item.addEventListener("drop", function () {
            if (draggedItem2 !== this) {
                var temp = this.innerText;
                this.innerText = draggedItem2.innerText;
                draggedItem2.innerText = temp;
            }
        });

    });
}

function checkPuzzle2() {

    var correctOrder = [
        "T3: Code Review",
        "T5: Write Bug Fixes",
        "T4: Fix Remaining Bugs",
        "T2: Update Documentation",
        "T1: Final Integration Testing",
    ];

    var correctOrder2 = [
        "T5: Write Bug Fixes",
        "T3: Code Review",
        "T4: Fix Remaining Bugs",
        "T2: Update Documentation",
        "T1: Final Integration Testing",
    ];


    var items = document.querySelectorAll("#task-list li");

    for (var i = 0; i < correctOrder.length; i++) {
        if (items[i].innerText !== correctOrder[i] && items[i].innerText !== correctOrder2[i]) {
            shakePuzzleCard();
            document.getElementById("warningline2").innerText = "Incorrect order! Try again.";
            return;
        }
    }


    document.getElementById("formula2").style.display = "block";
    document.getElementById("submitBtn2").style.display = "none";
    document.getElementById("warningline2").style.display = "none";
    document.getElementById("codeinput2").style.display = "block";
    document.getElementById("codeinput2btn").style.display = "block";
    document.getElementById("hint-card2").style.display= "none";
    disableDragging("#task-list");



    document.getElementById("codeinput2btn").onclick = checkdigit2;
}

function checkdigit2() {
    var usercodeInput2 = document.getElementById("codeinput2").value;
    if (usercodeInput2 === "5") {
        document.getElementById("codeinput2btn").style.display = "none";
        document.getElementById("nextstationbtn2").style.display = "block";
        document.getElementById("code2").innerText = "5";
        document.getElementById("nextstationbtn2").onclick = gotonxtpuzzle3;
        document.getElementById("next-note2").style.display = "block";
        document.getElementById("warningdigit2").style.display = "none";
        document.getElementById("formula2").style.display = "none";
        document.getElementById("warningdigit2").innerText = "";
    }
    else if (usercodeInput2 === "") {
        shakePuzzleCard();
        document.getElementById("warningdigit2").style.display = "block";
        document.getElementById("warningdigit2").innerText = "Required!";
    }
    else {
        shakePuzzleCard();
        document.getElementById("warningdigit2").style.display = "block";
        document.getElementById("warningdigit2").innerText = "Incorrect digit. Try again.";
    }
}

function gotonxtpuzzle3() {
    document.getElementById("code2").innerText = "5";
    document.getElementById("stationheading").innerText = "Station 3";
    document.getElementById("station-progress").innerText = "Station 3 of 5";
    document.getElementById("progress-fill").style.width = "60%";
    document.getElementById("puzzle2").style.display = "none";
    document.getElementById("puzzle3").style.display = "block";
    document.getElementById("hint-card2").style.display = "none";
    document.getElementById("hint-card3").style.display = "block";
}

function showHint2() {

    hintLevel2++;
    totalSeconds -= 30;

    if (hintLevel2 === 1) {
        document.getElementById("2hint1").innerText = "Look for tasks that do not depend on anything - these usually come first.";
    }
    else if (hintLevel2 === 2) {
        document.getElementById("2hint2").innerText = "Code review must happen before documentation updates and bug fixing decisions.";
    }
    else if (hintLevel2 === 3) {
        document.getElementById("2hint3").innerText = "T3 and T5 must appear early while final integration testing must come last.";
        document.getElementById("hintBtn2").disabled = true;
        document.getElementById("hintBtn2").innerText = "No Hints Left";
    }
}