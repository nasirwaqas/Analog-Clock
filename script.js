let clockInterval;
let localDate = new Date("2023-01-01T12:00:00"); 

function clockTick() {
    const date = localDate; // Use the local date
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;

    // Rotate the clock hands
    rotateClockHand(document.getElementById("second-hand"), seconds);
    rotateClockHand(document.getElementById("minute-hand"), minutes);
    rotateClockHand(document.getElementById("hour-hand"), hours);

    localDate.setSeconds(localDate.getSeconds() + 1); // Increment the local date by 1 second
}

function rotateClockHand(element, rotation) {
    element.style.setProperty("--rotate", rotation * 360);
}

function stopClock() {
    clearInterval(clockInterval); // Stop the clock
    clockInterval = null; // Reset the interval reference
}

function startClock() {
    
        clockInterval = setInterval(clockTick, 1000); // Restart the clock
    }


function clearClock() {
    clearInterval(clockInterval); // Stop the clock
    clockInterval = null; // Reset the interval reference
    localDate = new Date("2023-01-01T12:00:00"); // Reset to the default time
    document.getElementById("hour-hand").style.setProperty("--rotate", 0);
    document.getElementById("minute-hand").style.setProperty("--rotate", 0);
    document.getElementById("second-hand").style.setProperty("--rotate", 0);
}