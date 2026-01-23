var puzzle3Solved = false;

var hintLevel3 = 0;
document.getElementById("hintBtn3").onclick = showHint3;

document.getElementById("puzzle3checkbtn").onclick = checkPuzzle3;

function checkPuzzle3() {

    if (puzzle3Solved) {
        alert("This station is already completed.");
        return;
    }

    var userInput = document.getElementById("weeksInput").value;

    if (userInput === "4") {
        document.getElementById("formula3").style.display = "block";
        document.getElementById("puzzle3checkbtn").style.display = "none";
        document.getElementById("code3").innerText = "?";
        document.getElementById("nextstationbtn3").style.display = "block";
        document.getElementById("next-note3").style.display = "block";
        document.getElementById("warningline").innerText = "";
        document.getElementById("weeksInput").readOnly = true;

        puzzle3Solved = true;

        document.getElementById("nextstationbtn3").onclick = gotonxtpuzzle4;

        document.getElementById("code3").innerText = "4";
    } 

    else if (userInput === "") {
        shakePuzzleCard();
        document.getElementById("warningline").innerText = "Required! Please enter the number of weeks.";
    }
    
    else {
        shakePuzzleCard();
        document.getElementById("warningline").innerText = "Incorrect! Recheck the workload and team capacity.";
    }
}

function gotonxtpuzzle4() {
    document.getElementById("stationheading").innerText = "Station 4";
    document.getElementById("station-progress").innerText = "Station 4 of 5";
    document.getElementById("progress-fill").style.width = "80%";
    document.getElementById("puzzle3").style.display = "none";
    document.getElementById("puzzle4").style.display = "block";
    document.getElementById("hint-card3").style.display = "none";
    document.getElementById("hint-card4").style.display = "block";
}

function showHint3() {

    hintLevel3++;
    totalSeconds -= 30;

    if (hintLevel3 === 1) {
        document.getElementById("3hint1").innerText = "Combine the work capacity of both team members per week.";
    }
    else if (hintLevel3 === 2) {
        document.getElementById("3hint2").innerText = "Ahmed contributes 1 unit per week, Lisa contributes half a unit per week.";
    }
    else if (hintLevel3 === 3) {
        document.getElementById("3hint3").innerText = "Together they complete 1.5 person-weeks of work every week.";
        document.getElementById("hintBtn3").disabled = true;
        document.getElementById("hintBtn3").innerText = "No more hints";
    }
}
