import { Injectable } from '@angular/core';
import { Player } from '../Models/player';
import { Card, EMPEROR_CARD, SLAVE_CARD, CITIZEN_CARD  } from '../Models/card';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public User: Player;
  public NPC: Player;
  constructor() {
    this.User = new Player();
    this.NPC = new Player();
   }

  // gameの初期化
  // 1. PlayerとNPCの初期化
  public initGame() {
    // 1. PlayerとNPCの初期化
    this.User.removeAllCards();
    this.NPC.removeAllCards();
    // 2. ランダムに皇帝側か奴隷側かを決める
    const random = Math.floor(Math.random() * 2);
    if (random === 0) {
      // 3. 皇帝側の初期カード配布
      this.User.isEmperor = true;
      this.initEmperor(this.User);
      // 4. 奴隷側の初期カード配布
      this.NPC.isEmperor = false;
      this.initSlave(this.NPC);
    } else {
      // 3. 皇帝側の初期カード配布
      this.NPC.isEmperor = true;
      this.initEmperor(this.NPC);
      // 4. 奴隷側の初期カード配布
      this.User.isEmperor = false;
      this.initSlave(this.User);
    }
  }

  // カードの選択
  // 引数：Player, Card
  // 戻り値：なし
  public selectCard(player: Player, card: Card) {
    // 選択されたカードをplayerが持っているか確認
    if (player.getCards().indexOf(card) !== -1) {
      // 選択されたカードをplayerのselectedCardにセット
      player.selectedCard = card;
    }
    // 選択されたカードをplayerが持っていない場合は何もしない
  }

  // NPCのカードをランダムに選択
  // 引数： x number
  // 戻り値：なし
  // 選択されるカードの割合: 市民 = x/100, その他 = 100 - x/100
  public selectNpcCard(x : number = 50) {
    // ランダムな値を生成 (0 ~ 99)
    const random = Math.floor(Math.random() * 100);
    // 市民を選択
    if (random < x) {
      // NPCのカードを市民にする
      this.selectCard(this.NPC, CITIZEN_CARD);
    }
    // その他を選択
    else {
      // NPCのカードを皇帝か奴隷にする
      if (this.NPC.isEmperor) {
        this.selectCard(this.NPC, EMPEROR_CARD);
      }
      else {
        this.selectCard(this.NPC, SLAVE_CARD);
      }
    }
  }



  // カードの勝敗判定
  // 引数：なし
  // 戻り値：勝者のPlayer, なしの場合はnull
  public judge(): String | null {
    // PlayerとNPCのselectedCardがnullかどうか確認
    if (this.User.selectedCard === null || this.NPC.selectedCard === null) {
      // どちらかがnullの場合は勝敗判定できないのでnullを返す
      return null;
    }
    // Playerのカードが皇帝の場合
    if (this.User.selectedCard.type === 'Emperor') {
      // NPCのカードが市民の場合
      if (this.NPC.selectedCard.type === 'Citizen') {
        // Playerの勝ち
        return "User";
      }
      // NPCのカードが奴隷の場合
      else if (this.NPC.selectedCard.type === 'Slave') {
        // NPCの勝ち
        return "NPC";
      }
    }
    // Playerのカードが奴隷の場合
    else if (this.User.selectedCard.type === 'Slave') {
      // NPCのカードが皇帝の場合
      if (this.NPC.selectedCard.type === 'Emperor') {
        // Playerの勝ち
        return "User";
      }
      // NPCのカードが市民の場合
      else if (this.NPC.selectedCard.type === 'Citizen') {
        // NPCの勝ち
        return "NPC";
      }
    }
    // Playerのカードが市民の場合
    else if (this.User.selectedCard.type === 'Citizen') {
      // NPCのカードが皇帝の場合
      if (this.NPC.selectedCard.type === 'Emperor') {
        // NPCの勝ち
        return "NPC";
      }
      // NPCのカードが奴隷の場合
      else if (this.NPC.selectedCard.type === 'Slave') {
        // Playerの勝ち
        return "User";
      }
      // NPCのカードが市民の場合
      else if (this.NPC.selectedCard.type === 'Citizen') {
        // 引き分け
        return null;
      }
    }
    // どれにも当てはまらない場合はnullを返す
    return null;
  }

  // 皇帝側の初期カード配布
  // 皇帝1枚　市民4枚
  // 引数：Player
  // 戻り値：なし
  private initEmperor(player: Player) {
    player.addCard(EMPEROR_CARD);
    player.addCard(CITIZEN_CARD);
    player.addCard(CITIZEN_CARD);
    player.addCard(CITIZEN_CARD);
    player.addCard(CITIZEN_CARD);
  }

  // 奴隷側の初期カード配布
  // 奴隷1枚　市民4枚
  // 引数：Player
  // 戻り値：なし
  private initSlave(player: Player) {
    player.addCard(SLAVE_CARD);
    player.addCard(CITIZEN_CARD);
    player.addCard(CITIZEN_CARD);
    player.addCard(CITIZEN_CARD);
    player.addCard(CITIZEN_CARD);
  }
    
  

}
