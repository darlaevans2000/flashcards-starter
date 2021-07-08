const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCard = this.deck.cards[0];
        this.turns = 0;
        this.correctGuesses = 0;
        this.incorrectGuesses = [];
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

    endRound() {
        const endOfGameString = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;

        console.log(endOfGameString);
        return endOfGameString;
    }
}

module.exports = Round;