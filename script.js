const statusDisplay = document.querySelector('.game--status');

let gameActive = true;
let currentPlayer = "X";
let player = 1;

const winningMessage = () => `${currentPlayer} nyert!`;
const drawMessage = () => `Döntetlen!`;
const currentPlayerTurn = () => `${currentPlayer} következik`;

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);

statusDisplay.innerHTML = currentPlayerTurn();

function handleCellClick(clickedCellEvent) {
	const clickedCell = clickedCellEvent.target;
	
	if(clickedCell.innerHTML != "")
	{ 
	alert("Kattints máshova!");
	handleCellClick();
	}
	
	handleCellPlayed(clickedCell);
}

function handleCellPlayed(clickedCell) {
	clickedCell.innerHTML = currentPlayer;
	
	player++;
	handlePlayerChange();
}

function handlePlayerChange() {
	
	if(player%2 == 1)
	{
		currentPlayer = "X";
		statusDisplay.innerHTML = currentPlayerTurn();
	}
	if(player%2 == 0)
	{
		currentPlayer = "O";
		statusDisplay.innerHTML = currentPlayerTurn();
	}
}

function handleRestartGame() {
    currentPlayer = "X";
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}
