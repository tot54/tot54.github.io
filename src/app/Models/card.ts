enum CardType {
	EMPEROR = 'Emperor',  // 皇帝カード
	SLAVE = 'Slave',      // 奴隷カード
	CITIZEN = 'Citizen'  // 市民カード
  }
  
class Card {
	type: CardType;
	image: string; // カードの画像のURLやパス
  
	constructor(type: CardType, image: string) {
	  this.type = type;
	  this.image = image;
	}
  
	// その他のメソッドや属性を追加することができます。
  }
  
  // 事前にカードを定義
  const EMPEROR_CARD = new Card(CardType.EMPEROR, 'assets/images/Card/emperor.png');
  const SLAVE_CARD = new Card(CardType.SLAVE, 'assets/images/Card/slave.png');
  const CITIZEN_CARD = new Card(CardType.CITIZEN, 'assets/images/Card/citizen.png');
  const UNKNOWN_CARD = new Card(CardType.CITIZEN, 'assets/images/Card/card_back.png');

  export {Card, CardType, EMPEROR_CARD, SLAVE_CARD, CITIZEN_CARD, UNKNOWN_CARD}

