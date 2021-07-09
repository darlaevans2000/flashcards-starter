const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Deck = require('../src/Deck');
const Game = require('../src/Game');
const Round = require('../src/Round');
const Card = require('../src/Card');

describe('Game', () => {
  let game, cards, deck, round;

  beforeEach(() => {
    cards = prototypeQuestions.map((currentCard) => {
      let card = new Card(currentCard.id, currentCard.question, currentCard.answers, currentCard.correctAnswer);
      return card;
    })
    deck = new Deck(cards);
    round = new Round(deck);
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should instantiate a Round using a deck', () => {

    expect(round).to.be.a('object');
    expect(round.deck).to.be.an.instanceOf(Deck)
  });

  it('should instantiate with cards', () => {

    expect(cards).to.be.a('array');
    expect(cards[0]).to.be.an.instanceOf(Card);
  });

  it('should track current round', () => {
    expect(game.currentRound).to.equal(undefined);
  });

  it('should be able to start a new Game', () => {
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
