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
    const curDateString = `${stringTwoDigit(curTime.getDate())}-${stringTwoDigit(curTime.getMonth() + 1)}`

    const clockDisplay = document.querySelector("#status-bar-date");
    clockDisplay.textContent = curDateString;
}


function renderOptions() {
    const gridParent = document.querySelector("#display-grid");

    linkConfig.forEach(option => {

        const categoryParent = document.createElement("div");
        const categoryParagraph = document.createElement("p");
        categoryParagraph.textContent = option.category;
        categoryParagraph.classList.add("text-shamrock-500");
        categoryParagraph.classList.add("font-bold");
        categoryParagraph.classList.add("font-bold");
        categoryParent.appendChild(categoryParagraph);

        option.links.forEach(link => {
            const linkParagraph = document.createElement("p");
            const linkAnchor = document.createElement("a");
            linkAnchor.textContent = link.showAs;
            linkAnchor.href = link.link;
            linkAnchor.target = "_blank"
            linkParagraph.appendChild(linkAnchor);
            categoryParent.appendChild(linkParagraph);
        });

        gridParent.appendChild(categoryParent);
    });
}

function registerUserKeypress(event) {
    var key = event.keyCode;

    if (key == 8) {
        userCommandLineInput = userCommandLineInput.slice(0, -1);
        const commandLineDisplay = document.querySelector("#user-command-line-input");
        commandLineDisplay.textContent = userCommandLineInput;
    }

    else if (key == 9) {
        const commandLineDisplay = document.querySelector("#user-command-line-input");
        event.preventDefault();
        const re = `^${userCommandLineInput}.*`;

        let keepGoing = true;
        linkConfig.forEach(option => {
            option.links.forEach(link => {
                if (link.showAs.match(re) != null && link.showAs != commandLineDisplay.textContent && keepGoing) {

                    commandLineDisplay.textContent = link.showAs;
                    keepGoing = false;


                }
            })

        })

    }

    else if (key == 13) {
        const commandLineDisplay = document.querySelector("#user-command-line-input");
        event.preventDefault();

        let keepGoing = true;
        linkConfig.forEach(option => {
            option.links.forEach(link => {
                if (link.showAs == commandLineDisplay.textContent && keepGoing) {
                    window.open(link.link, "_blank");
                    commandLineDisplay.textContent = "";
                    userCommandLineInput = "";
                    keepGoing = false;
                }
            })

        })
    }

    else if (event.key.toString().length < 2) {
        userCommandLineInput += event.key;
        const commandLineDisplay = document.querySelector("#user-command-line-input");
        commandLineDisplay.textContent = userCommandLineInput;
    }

}


function initialize() {
    statusBarSetClock();
    setInterval(statusBarSetClock, 1000)

    statusBarSetDate();
    setInterval(statusBarSetDate, 1000 * 60)

    renderOptions();

    document.addEventListener("keydown", registerUserKeypress)
}

let userCommandLineInput = "";
initialize();