let timerInterval;

function startTimer(minutes) {
    // Hide the buttons and show the countdown
    document.getElementById("time-selector").style.display = "none";
    const countdownElement = document.getElementById("countdown");
    countdownElement.style.display = "block";

    // Calculate the countdown end time
    let timeRemaining = minutes * 60;

    // Update the countdown every second
    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        countdownElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            resetTimer();
        }

        timeRemaining--;
    }, 1000);
}

function resetTimer() {
    // Reset the display
    document.getElementById("time-selector").style.display = "block";
    document.getElementById("countdown").style.display = "none";
}