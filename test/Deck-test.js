const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
    let deck, card1, card2, card3;

    beforeEach(() => {
        card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        cards = [card1, card2, card3];
        deck = new Deck(cards);
    });

    it('should be a function', () => {
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of deck', () => { 
        expect(deck).to.be.an.instanceof(Deck);
    });

    it('should be initialized with an array of Card objects', () => {
        expect(deck.cards).to.deep.equal(cards);
    });

    it('should be able to count how many cards are in the deck', () => {
        expect(deck.countCards()).to.deep.equal(3);
    })
});