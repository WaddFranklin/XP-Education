var state = {
    board: [],
    currentGame: [],
    savedGames: []
}

function start() {
    createBoard();
    newGame();

    console.log(state.board);
}

function createBoard() {
    state.board = [];

    for (var i = 1 ; i <= 60 ; i++) {
        state.board.push(i);
    }
}

function newGame() {
    resetGame();
    render();
}

function render() {
    renderBoard();
}

function renderBoard() {
    var divBoard = document.querySelector("#megasena-board");
    divBoard.innerHTML = '';

    var ulNumbers = document.createElement('ul');
    for (var i = 0 ; i < state.board.length ; i++) {
        var currentNumber = state.board[i];

        var liNumber = document.createElement('li');

        liNumber.textContent = currentNumber;

        ulNumbers.appendChild(liNumber);
    }

    divBoard.appendChild(ulNumbers);
}

function addNumberToGame(numberToAdd) {
    if (numberToAdd < 1 || numberToAdd > 60) {
        console.error("Número inválido", numberToAdd);
        return;
    }

    if (state.currentGame.length >= 6) {
        console.error('O jogo já está completo.');
        return;
    }

    if (isNumberInGame(numberToAdd)) {
        console.error('Este número já está no jogo.', numberToAdd);
        return;
    }

    state.currentGame.push(numberToAdd);
}

function removeNumberFromGame(numberToRemove) {
    if (numberToRemove < 1 || numberToRemove > 60) {
        console.error("Número inválido", numberToRemove);
        return;
    }

    var newGame = [];

    for (var i = 0 ; i < state.currentGame.length ; i++) {
        var currentGame = state.currentGame[i];

        if (currentGame === numberToRemove) {
            continue;
        }

        newGame.push(currentGame);
    }

    state.currentGame = newGame;
}

function isNumberInGame(numberToCheck) {
    return state.currentGame.includes(numberToCheck);
}

function saveGame() {
    if (!isGameComplete()) {
        console.error('O jogo não está completo!');
        return;
    }

    state.savedGames.push(state.currentGame);
}

function isGameComplete() {
    return state.currentGame.length === 6;
}

function resetGame() {
    state.currentGame = [];
}

start();