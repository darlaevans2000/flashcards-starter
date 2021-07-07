class Turn {
    constructor(guess, card) {
        this.guess = guess;
        this.card = card;
    }

    returnGuess() {
        return this.guess;
    }

    returnCard() {
        return this.card;
    }

    evaluateGuess() {
        return this.guess === this.card.correctAnswer ? true : false
        // using ternary operator ? as an if statement. If this.guess is strictly equal to 
        // the correct answer it will return our first option, true, else it returns false.
    }

    giveFeedback() {
        return this.evaluateGuess() === true ? "correct!" : "incorrect!"
    }
}