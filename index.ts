import { Deck } from './builders/Deck.js';

const run = async () => {
    const deck = new Deck();
    const [player1Cards, player2Cards] = await deck.dealCards(2);

    console.log({
        player1Cards,
        player2Cards,
        deck: deck.getDeck(),
        cardsInDeck: deck.getDeck().length
    });
}

run();
