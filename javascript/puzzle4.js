var puzzle4Solved = false;

var hintLevel4 = 0;
document.getElementById("hintBtn4").onclick = showHint4;

document.getElementById("puzzle4checkbtn").onclick = checkPuzzle4;

function checkPuzzle4() {

    if (puzzle4Solved) {
        alert("This station is already completed.");
        return;
    }

    var userInput = document.getElementById("bonusInput").value;

    if (userInput === "45") {

        document.getElementById("formula4").style.display = "block";
        document.getElementById("code4").innerText = "?";
        document.getElementById("bonusInput").readOnly = true;
        document.getElementById("puzzle4checkbtn").style.display = "none";
        document.getElementById("codeinput4").style.display = "block";
        document.getElementById("codeinput4btn").style.display = "block";

        document.getElementById("codeinput4btn").onclick = checkdigit4;

        puzzle4Solved = true;
    }
    else if (userInput === "") {
        shakePuzzleCard();
        document.getElementById("warningline4").innerText = "Required! Please enter the function return value.";
    }
    else {
        shakePuzzleCard();
        document.getElementById("warningline4").innerText = "Incorrect. Trace the function logic carefully.";
    }
}

function checkdigit4() {
    var usercodeInput4 = document.getElementById("codeinput4").value;
    if (usercodeInput4 === "9") {
        document.getElementById("codeinput4btn").style.display = "none";
        document.getElementById("nextstationbtn4").style.display = "block";
        document.getElementById("code4").innerText = "9";
        document.getElementById("nextstationbtn4").onclick = gotonxtpuzzle5;
        document.getElementById("next-note4").style.display = "block";
        document.getElementById("warningdigit4").style.display = "none";
        document.getElementById("warningdigit4").innerText = "";
        document.getElementById("codeinput4").readOnly = true;
    }
    else if (usercodeInput4 === "") {
        shakePuzzleCard();
        document.getElementById("warningdigit4").style.display = "block";
        document.getElementById("warningdigit4").innerText = "Required!";
    }
    else {
        shakePuzzleCard();
        document.getElementById("warningdigit4").style.display = "block";
        document.getElementById("warningdigit4").innerText = "Incorrect digit. Try again.";
    }
}
function gotonxtpuzzle5() {
    document.getElementById("stationheading").innerText = "Station 5";
    document.getElementById("station-progress").innerText = "Station 5 of 5";
    document.getElementById("progress-fill").style.width = "100%";
    document.getElementById("puzzle4").style.display = "none";
    document.getElementById("puzzle5").style.display = "block";
    document.getElementById("hint-card4").style.display = "none";
    document.getElementById("hint-card5").style.display = "block";
}
function showHint4() {

    hintLevel4++;
    totalSeconds -= 30;
    if (hintLevel4 === 1) {
        document.getElementById("4hint1").innerText = "Check which branch of the 'if' statement is executed for the given value.";
    }
    else if (hintLevel4 === 2) {
        document.getElementById("4hint2").innerText = "The condition 'points >= 50' is false for this input.";
    }
    else if (hintLevel4 === 3) {
        document.getElementById("4hint3").innerText = "Follow the 'else' block and then apply the final calculation.";
        document.getElementById("hintBtn4").disabled = true;
        document.getElementById("hintBtn4").innerText = "No more hints";
    }
}
