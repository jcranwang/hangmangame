const remainGuess = document.querySelector("#remain-guess");
const puzzleDisplay = document.querySelector("#puzzle");
const status = document.querySelector("#status");
let manOne;

window.addEventListener("keypress", (e) => {
    const guess = String.fromCharCode(e.charCode);
    manOne.makeGuess(guess);
    render();
});

const render = () => {
    status.textContent = `Game Status: ${manOne.status}`;
    remainGuess.textContent = manOne.statusMsg;
    puzzleDisplay.innerHTML = "";
    manOne.puzzle.split("").forEach((letter) => {
        const newSpan = document.createElement("span");
        newSpan.textContent = letter;
        puzzleDisplay.appendChild(newSpan);
    });
};

const startGame = async () => {
    const puzzle = await getPuzzle(2);
    console.log(puzzle);
    manOne = new Hangman(puzzle, 3);
    render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();