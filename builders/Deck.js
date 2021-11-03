"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
const types_1 = require("../lib/types");
const Card_1 = require("./Card");
class Deck {
    constructor() {
        this.deck = [];
        this.resetDeck = () => {
            const allSuits = [types_1.Suit.C, types_1.Suit.D, types_1.Suit.H, types_1.Suit.S];
            const newDeck = [];
            for (let i = 2; i <= 14; i++) {
                for (let j = 0; j < allSuits.length; j++) {
                    newDeck.push(new Card_1.Card(i, allSuits[j]));
                }
            }
            this.setDeck(newDeck);
        };
        this.getDeck = () => this.deck;
        this.setDeck = (deck) => {
            console.log({ deck, numCards: deck.length });
            this.deck = deck;
        };
        this.dealCards = (numPlayers) => __awaiter(this, void 0, void 0, function* () {
            const tempDeck = Array.from(this.deck);
            const dealtCards = [];
            const dealCardToPlayer = (playerIndex, playerCardIndex) => {
                const deckCardIndex = Math.floor(Math.random() * tempDeck.length);
                console.log({ tempDeck, splicedCard: tempDeck[deckCardIndex], deckCardIndex });
                dealtCards[playerIndex].push(tempDeck[deckCardIndex]);
                tempDeck.splice(deckCardIndex, 1);
            };
            for (let i = 0; i < numPlayers; i++) {
                dealtCards.push([]);
                yield dealCardToPlayer(i, 0);
                yield dealCardToPlayer(i, 1);
            }
            this.setDeck(tempDeck);
            return dealtCards;
        });
        this.resetDeck();
    }
}
exports.Deck = Deck;
//# sourceMappingURL=Deck.js.map