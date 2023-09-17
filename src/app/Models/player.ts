import { Card } from "./card";

// 所持しているカードの種類と枚数を管理するクラス
// 追加: 選択されたカードを管理する
// 追加: 皇帝側か奴隷側かを管理する
class Player {
	cards: Card[];
	selectedCard: Card | null;
	isEmperor: boolean;
	constructor() {
		this.cards = [];
		this.selectedCard = null;
		this.isEmperor = false;
	}
	// 所持しているカードの枚数を返す
	getCardCount(): number {
		return this.cards.length;
	}
	// 所持しているカードを返す
	getCards(): Card[] {
		return this.cards;
	}
	// カードを追加する
	addCard(card: Card) {
		this.cards.push(card);
	}
	// カードを削除する
	removeCard(card: Card) {
		const index = this.cards.indexOf(card);
		if (index !== -1) {
			this.cards.splice(index, 1);
		}
	}
	// カードをすべて削除する
	removeAllCards() {
		this.cards = [];
		// カードが選択されている場合は選択を解除する
		this.selectedCard = null;
	}
	// カードをシャッフルする
	shuffleCards() {
		for (let i = this.cards.length - 1; i >= 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
		}
	}
	// カードを表示する
	showCards() {
		console.log(this.cards);
	}
}

export { Player };