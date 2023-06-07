function stringTwoDigit(input) {
    if (input.toString().length < 2) {
        return "0" + input.toString();
    }
    return input;
}

function statusBarSetClock() {
    const curTime = new Date();
    const curTimeString = `${stringTwoDigit(curTime.getHours())}:${stringTwoDigit(curTime.getMinutes())}:${stringTwoDigit(curTime.getSeconds())}`

    const clockDisplay = document.querySelector("#status-bar-clock");
    clockDisplay.textContent = curTimeString;
}

function statusBarSetDate() {
    const curTime = new Date();
    const curDateString = `${stringTwoDigit(curTime.getDate())}-${stringTwoDigit(curTime.getMonth() +1)}`

    const clockDisplay = document.querySelector("#status-bar-date");
    clockDisplay.textContent = curDateString;
}

function initialize() {
    statusBarSetClock();
    setInterval(statusBarSetClock, 1000)

    statusBarSetDate();
    setInterval(statusBarSetDate, 1000*60)
}

initialize();