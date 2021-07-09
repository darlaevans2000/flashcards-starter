const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1, card2, card3, cards, deck, round;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.instanceOf(Round);
  });

  it('should have a property of deck', () => {
    expect(round.deck).to.deep.equal(deck);
  });

  it('should start off with 0 turns', () => {
    expect(round.turns).to.deep.equal(0);
  });

  it('should record the number of correct guesses and start with 0 correct guesses', () => {
    expect(round.correctGuesses).to.deep.equal(0);
  });

  it('should record the incorrect guesses in an array', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should be able to keep track of what our current card being played is', () => {
    expect(round.currentCard).to.deep.equal(card1);
  });

  it('should be able to return the current card being played', () => {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should count number of turns every time a guess is entered', () => {
    round.takeTurn('a guess')
    round.takeTurn('a guess')

    expect(round.turns).to.deep.equal(2);
  });

  it('should count how many correct guesses', () => {
    expect(round.takeTurn('sea otter')).to.deep.equal('correct!');
    expect(round.takeTurn('gallbladder')).to.deep.equal('correct!');

    expect(round.correctGuesses).to.deep.equal(2);
    expect(round.incorrectGuesses).to.deep.equal([]);
    expect(round.incorrectGuesses.length).to.equal(0);
  });

  it('should store all the incorrect guesses in the empty array by card id', () => {
    expect(round.takeTurn('pug')).to.deep.equal('incorrect!');
    expect(round.takeTurn('spleen')).to.deep.equal('incorrect!');

    expect(round.correctGuesses).to.deep.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([1, 14]);
    expect(round.incorrectGuesses.length).to.equal(2);
    expect(round.currentCard).to.deep.equal(card3);
  });

  it('should calculate and return the percentage of correct guesses', () => {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');

    expect(round.calculatePercentCorrect()).to.equal(50);

    round.takeTurn('watching Netflix');
    expect(round.calculatePercentCorrect()).to.equal(33);
  });

  it('should return a statement at the end of each round with percent correct and amount of time taken', () => {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('watching Netflix');
    round.calculatePercentCorrect();

    expect(round.endRound()).to.equal(`** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly! In ${round.calculateGameTime()}`);
  })

})
