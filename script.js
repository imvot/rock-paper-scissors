const ROCK_EMOJI_URL = "https://twemoji.maxcdn.com/svg/270a.svg"
const PAPER_EMOJI_URL = "https://twemoji.maxcdn.com/svg/270b.svg"
const SCISSORS_EMOJI_URL = "https://twemoji.maxcdn.com/svg/270c.svg"

// WHEN user starts the game
// REPEAT 5x
	// GET INPUT from player 
	// GET random choice from computer
	// COMPARE choices
	// SHOW results


// WHEN user starts the game
/*
function game() {
	//REPEAT 5x
	for(i=0; i<5; i++) {
		console.log(playRound(getPlayerSelection(), getComputerSelection()))
	}
}
*/

// GET INPUT from player
/*
function getPlayerSelection() {
	let playerSelection = prompt("Rock, Paper or Scissors ?").toLowerCase()
	switch(playerSelection) {
		case "rock":
		case "paper":
		case "scissors":
			return playerSelection
		default:
			alert("Invalid Choice")
			return getPlayerSelection()
	}
}
*/

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

function play(playerSelection) {
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
}

const buttons = [...document.querySelectorAll(".choice > button")]
buttons.forEach(btn => btn.addEventListener(
    "click", () => play(btn.id)
))
const playerScoreDiv = document.querySelector("#player-score");
const computerScoreDiv = document.querySelector("#computer-score");
const playerEmojiImg = document.querySelector("#player-emoji");
const computerEmojiImg = document.querySelector("#computer-emoji");
const roundResultDiv = document.querySelector("#round-result");
let computerScore = 0;
let playerScore = 0;


// Wait for player selection(btn value)
// Change #player-emoji accordingly
// Get random computer selection
// Compare selections
// Increase score accordingly
// Announce round result accordingly
// if score <= 5 announce winner, if not loop over
