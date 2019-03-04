class Hangman {
    constructor(word, guessNum) {
        this.word = word.toLowerCase().split("");
        this.guessNum = guessNum;
        this.guessedLetters = [];
        this.status = "playing";
    }
    get puzzle() {
        let puzzleResult = "";
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === " ") {
                puzzleResult += letter;
            } else {
                puzzleResult += "*";
            }
        });
        return puzzleResult;
    }
    makeGuess(guess) {
        if (this.status === "playing") {
            guess = guess.toLowerCase();
            if (!this.guessedLetters.includes(guess)) {
                this.guessedLetters = [...this.guessedLetters, guess];
                if (!this.word.includes(guess)) {
                    this.guessNum--;
                }
            }
            this.updateStatus();
        }
    }
    updateStatus() {
        let flag = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === " ");
        if (this.guessNum > 0 && !flag) {
            this.status = "playing";
        } else if (this.guessNum > 0 && flag) {
            this.status = "finished";
        } else {
            this.status = "failed"
        }
    }
    get statusMsg() {
        if (this.status === "playing") {
            return `Guesses Left: ${this.guessNum}`;
        } else if (this.status === "finished") {
            return "Great work, you guessed the word."
        } else {
            return `Nice try! The word was "${this.word.join("")}"`;
        }
    }
}

export {Hangman as default};