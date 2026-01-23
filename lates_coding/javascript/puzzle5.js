var puzzle5Solved = false;
var draggedItem = null;

var hintLevel5 = 0;
document.getElementById("hintBtn5").onclick = showHint5;
enablePuzzle5Drag();

document.getElementById("submitBtn5").onclick = checkPuzzle5;

function enablePuzzle5Drag() {
    var items = document.querySelectorAll("#risk-list li");

    items.forEach(function (item) {

        item.addEventListener("dragstart", function () {
            draggedItem = item;
        });

        item.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        item.addEventListener("drop", function () {
            if (draggedItem !== this) {
                var temp = this.innerText;
                this.innerText = draggedItem.innerText;
                draggedItem.innerText = temp;
            }
        });

    });
}

function checkPuzzle5() {

    if (puzzle5Solved) {
        alert("This station is already completed.");
        return;
    }

    var correctOrder = [
        "The client might change major requirements during the project.",
        "The team is using a technology they have never worked with before.",
        "A senior developer may be unavailable at a critical moment.",
    ];

    var items = document.querySelectorAll("#risk-list li");

    for (var i = 0; i < correctOrder.length; i++) {
        if (!items[i].innerText.startsWith(correctOrder[i])) {
            shakePuzzleCard();
            document.getElementById("warningline5").innerText = "";
            document.getElementById("warningline5").innerText = "Incorrect risk priority. Re-evaluate the impact of each risk.";
            return;
        }

        document.getElementById("submitBtn5").style.display = "none";
        document.getElementById("warningline5").innerText = "";
        document.getElementById("warningline5").style.display = "none";
        disableDragging("#risk-list");
        document.getElementById("nextstationbtn5").style.display = "block";
    }


    document.getElementById("formula5").style.display = "block";
    document.getElementById("code5").innerText = "4";
    document.getElementById("final-note").style.display = "block";

    puzzle5Solved = true;

    document.getElementById("nextstationbtn5").onclick = gotoemergencypanel;

}

function gotoemergencypanel() { 
    //window.location.href = "lockre.html";
    document.getElementById("puzzle-card").style.display = "none";
    document.getElementById("emergency-panel").style.display = "block";
    document.getElementById("hint-card1").style.display = "none";
    document.getElementById("hint-card2").style.display = "none";
    document.getElementById("hint-card3").style.display = "none";
    document.getElementById("hint-card4").style.display = "none";
    document.getElementById("hint-card5").style.display = "none";
}

function showHint5() {

    hintLevel5++;
    totalSeconds -= 30;
    if (hintLevel5 === 1) {
        document.getElementById("5hint1").innerText = "Risks that affect scope and requirements often have the biggest impact.";
    }
    else if (hintLevel5 === 2) {
        document.getElementById("5hint2").innerText = "Technical uncertainty can be serious, but uncontrolled requirement changes can affect the entire project.";
    }
    else if (hintLevel5 === 3) {
        document.getElementById("5hint3").innerText = "Consider which risks could cause the most rework or project delay if they occur.";
        document.getElementById("hintBtn5").disabled = true;
        document.getElementById("hintBtn5").innerText = "No more hints";
    }
}