const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card, turn;

  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('sea otter', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', () => {
    expect(turn.guess).to.equal('sea otter');
  });

  it('should instantiate our card currently playing', () => {
    expect(turn.card).to.equal(card);
  });

  it('should be able to return the guess', () => {
    turn.returnGuess();

    expect(turn.returnGuess()).to.equal('sea otter');
    // why can I also put in turn.guess in here? which should be used?
  });

  it('should be able to return the current card', () => {
    turn.returnCard();

    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to evaluate the current guess', () => {
    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should be able to return feedback on the guess', () => {
    turn.giveFeedback();

    expect(turn.giveFeedback()).to.equal('correct!');
  });

});
