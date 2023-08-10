// Wait for player selection(btn value)
// Change #player-emoji accordingly
// Get random computer selection
// Changer #computer-emoji accordingly
// Animate both emojis
// Wait for animations to be done
// Compare selections
// Increase score accordingly
// Announce round result accordingly
// if score <= 5 announce winner, if not loop over

const ROCK_EMOJI_URL = "https://twemoji.maxcdn.com/svg/270a.svg"
const PAPER_EMOJI_URL = "https://twemoji.maxcdn.com/svg/270b.svg"
const SCISSORS_EMOJI_URL = "https://twemoji.maxcdn.com/svg/270c.svg"

const buttons = [...document.querySelectorAll(".choice > button")]
const playerScoreDiv = document.querySelector("#player-score");
const computerScoreDiv = document.querySelector("#computer-score");
const playerEmojiImg = document.querySelector("#player-emoji");
const computerEmojiImg = document.querySelector("#computer-emoji");
const roundResultDiv = document.querySelector("#round-result");
const modalResultDiv = document.querySelector("#modal-result");
const dialogElement = document.querySelector("dialog");
const modalCloseBtn = document.querySelector("#modal-close");

buttons.forEach(btn => btn.addEventListener(
    "click", () => play(btn.id)
))
modalCloseBtn.addEventListener("click", resetGame)

let computerScore = 0;
let playerScore = 0;


function random(start, stop) {
	stop += start == 0 ? 1 : 0
	return Math.floor(Math.random() * stop) + start
}

//GET random choice from computer
function getComputerSelection() {
	const choices = ["rock", "paper", "scissors"]
	return choices[random(0, 2)]
}

//COMPARE choices
function compareSelections(playerSelection, computerSelection) {
	const results = {
		"rock": {"rock": "tie", "paper": "lose", "scissors": "win"},
		"paper": {"rock": "win", "paper": "tie", "scissors": "lose"},
		"scissors": {"rock": "lose", "paper": "win", "scissors": "tie"}
	};

    return results[playerSelection][computerSelection]
}

function increasePlayerScore() {
    playerScoreDiv.innerText = ++playerScore;
}

function changeEmoji(emojiImg, emojiName) {
    switch(emojiName) {
        case "rock":
            emojiImg.src = ROCK_EMOJI_URL;
            break;
        case "paper":
            emojiImg.src = PAPER_EMOJI_URL;
            break;
        case "scissors":
            emojiImg.src = SCISSORS_EMOJI_URL;
    }
}

function increaseComputerScore() {
    computerScoreDiv.innerText = ++computerScore;
}

function hideRoundResult() {
    roundResultDiv.style.display = "none";
}

function showRoundResult(result) {
    roundResultDiv.style.display = "block";
    switch(result) {
        case "win":
            roundResultDiv.innerText = "You won :)";
            break;
        case "lose":
            roundResultDiv.innerText = "You lost :(";
            break;
        case "tie":
            roundResultDiv.innerText = "Tie";
            break;
    }
}

function resetGame() {
    hideRoundResult();
    playerScore = 0;
    playerScoreDiv.innerText = 0;
    computerScore = 0;
    computerScoreDiv.innerText = 0;
    dialogElement.close();
}

function play(playerSelection) {
    computerEmojiImg.classList.add("computer-handshake");
    playerEmojiImg.classList.add("player-handshake");
    setTimeout(() => {
        changeEmoji(playerEmojiImg, playerSelection);
        const computerSelection = getComputerSelection();
        changeEmoji(computerEmojiImg, computerSelection);
        const result = compareSelections(playerSelection, computerSelection)
        if(result == "win") {
            increasePlayerScore()
        } else if(result == "lose") {
            increaseComputerScore()
        } 
        showRoundResult(result)
        if(playerScore >= 5) {
            dialogElement.showModal();
            modalResultDiv.innerText = "You won !";
        }
        if(computerScore >= 5) {
            dialogElement.showModal();
            modalResultDiv.innerText = "You lost !";
        }
        computerEmojiImg.classList.remove("computer-handshake");
        playerEmojiImg.classList.remove("player-handshake");
    }, 1500);
}
