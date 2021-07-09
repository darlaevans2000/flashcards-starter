const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCard = this.deck.cards[0];
        this.turns = 0;
        this.correctGuesses = 0;
        this.incorrectGuesses = [];
        this.time = Date.now();
    }

    returnCurrentCard() {
        return this.currentCard;
    }
    
    takeTurn(guess) {
        const turn = new Turn(guess, this.currentCard);
        this.turns ++;
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id);
        } else {
            this.correctGuesses ++;
        }
        this.currentCard = this.deck.cards[this.turns];
        this.returnCurrentCard();
        return turn.giveFeedback(); 
    }

    calculatePercentCorrect(){
        return Math.round(this.correctGuesses / this.turns * 100);
    }

    calculateGameTime() {
    let milliseconds = (Date.now() - this.time);
    let seconds = Math.round((milliseconds / 1000) % 60);
    (seconds < 10) ? seconds = `0${seconds}` : seconds;
    let minutes = Math.round(milliseconds / 60000);
    let totalTime;
    (minutes === 1) ? totalTime = `1 minute and ${seconds} seconds` : totalTime = `${minutes} minutes and ${seconds} seconds`;
    return totalTime;
  }

    endRound() {
        let percent = this.calculatePercentCorrect();
        let time = this.calculateGameTime();
        console.log(`** Round over! ** You answered ${percent}% of the questions correctly! In ${time}`);
        return `** Round over! ** You answered ${percent}% of the questions correctly! In ${time}`;
    }
}

module.exports = Round;