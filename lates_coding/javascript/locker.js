var enteredCode = "";
var correctCode = "25494";
var maxLength = 5;

document.getElementById("timeDisplay").innerText =
    minutes + ":" + seconds;


function addDigit(digit) {
    if (enteredCode.length < maxLength) {
        enteredCode += digit;
        updateDisplay();
    }
}

function updateDisplay() {
    var dots = "";
    for (var i = 0; i < enteredCode.length; i++) {
        dots += "•";
    }
    document.getElementById("pin-display").innerText =
        dots.padEnd(maxLength, "_");
}

function clearAll() {
    enteredCode = "";
    updateDisplay();

}

function checkCode() {
    var message = document.getElementById("gate-message");
    var gate = document.getElementById("gate");

    if (enteredCode === "") {
        showError("Code required!");
        shakePanel();
        return;
    }

    if (enteredCode === correctCode) {
        message.innerText = "ACCESS GRANTED — SYSTEM CANCELLED";
        message.style.color = "#00D4A6";
        gate.classList.add("open");

        setTimeout(() => {
            window.location.href = "finish.html";
        }, 2000);

    } else {
        showError("Incorrect code. Try again.");
        shakePanel();
        clearAll();
    }
}

function showError(text) {
    var message = document.getElementById("gate-message");
    message.innerText = text;
    message.style.color = "#f87171";
}

function shakePanel() {
    var panel = document.getElementById("emergency-panel");
    panel.classList.remove("shake");
    void panel.offsetWidth;
    panel.classList.add("shake");
}