import { Suit } from '../lib/types';
import { Card } from './Card';

export class Deck {
	deck: Card[] = [];

	constructor() {
		this.resetDeck();
	}

	resetDeck = () => {
		const allSuits = [Suit.C, Suit.D, Suit.H, Suit.S];
		const newDeck = [];

		for (let i = 2; i <= 14; i++) {
			for (let j = 0; j < allSuits.length; j++) {
				newDeck.push(new Card(i, allSuits[j]));
			}
		}

		this.setDeck(newDeck);
	}

	getDeck = () => this.deck;

	setDeck = (deck: Card[]) => {
		console.log({ deck, numCards: deck.length });
		this.deck = deck;
	}

	dealCards = async (numPlayers: number) => {
		const tempDeck = Array.from(this.deck);
		const dealtCards: Array<Array<Card>> = [];

		const dealCardToPlayer = (playerIndex: number, playerCardIndex: number) => {
			const deckCardIndex = Math.floor(Math.random() * tempDeck.length);
			console.log({ tempDeck, splicedCard: tempDeck[deckCardIndex], deckCardIndex });

			dealtCards[playerIndex].push(tempDeck[deckCardIndex]);
			tempDeck.splice(deckCardIndex, 1);
		}

		for (let i = 0; i < numPlayers; i++) {
			dealtCards.push([]);
			await dealCardToPlayer(i, 0);
			await dealCardToPlayer(i, 1);
		}

		this.setDeck(tempDeck);

		return dealtCards;
	}
}
