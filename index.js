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
const Deck_js_1 = require("./builders/Deck.js");
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    const deck = new Deck_js_1.Deck();
    const [player1Cards, player2Cards] = yield deck.dealCards(2);
    console.log({
        player1Cards,
        player2Cards,
        deck: deck.getDeck(),
        cardsInDeck: deck.getDeck().length
    });
});
run();
//# sourceMappingURL=index.js.map