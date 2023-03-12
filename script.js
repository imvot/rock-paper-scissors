// WHEN user starts the game
// REPEAT 5x
	// GET INPUT from player 
	// GET random choice from computer
	// COMPARE choices
	// SHOW results


// WHEN user starts the game
function game() {
	//REPEAT 5x
	for(i=0; i<5; i++) {
		console.log(playRound(getPlayerSelection(), getComputerSelection()))
	}
}

// GET INPUT from player
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
function playRound(playerSelection, computerSelection) {
	const results = {
		"rock": {"rock": "tie", "paper": "lose", "scissors": "win"},
		"paper": {"rock": "win", "paper": "tie", "scissors": "lose"},
		"scissors": {"rock": "lose", "paper": "win", "scissors": "tie"}
	};
	
	switch(results[playerSelection][computerSelection]) {
		case "win":
			return `You win! ${playerSelection} beats ${computerSelection}`
		case "lose":
			return `You lose! ${playerSelection} beats ${computerSelection}`
		case "tie":
			return "It's a tie!"
	}
}
