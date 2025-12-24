let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let msgSecond = document.querySelector("#msg-second");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const restartBtn = document.querySelector("button");

// computer choice
const gencompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// draw game
const drawGame = (compChoice) => {
    msg.innerText = "Game was draw!";
    msgSecond.innerText = `Computer chose ${compChoice}`;
    msg.style.color = "#081b31";
};

// show winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You are Winner!";
        msg.style.color = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You are Lose.";
        msg.style.color = "red";
    }

    msgSecond.innerText = `Computer chose ${compChoice}`;
};

// play game
const playGame = (userChoice) => {
    const compChoice = gencompChoice();

    if (userChoice === compChoice) {
        drawGame(compChoice);
    } else {
        let userWin;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

// user choice click
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// restart game (BEST & SAFE)
restartBtn.addEventListener("click", () => {
    location.reload();
});