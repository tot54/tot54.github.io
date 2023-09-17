import { Component, OnInit } from '@angular/core';
import { GameService } from '../../Services/game.service';
import { Card, UNKNOWN_CARD } from '../../Models/card';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  // カードの裏面の画像を定義
  public unknownCard = UNKNOWN_CARD;
  // プレイヤーへのメッセージを定義します。
  public text = 'カードを選択してください。';
  // ゲームのモードを定義します。
  private gameMode = 'play';
  
  constructor(public gameService: GameService) { }

  ngOnInit(): void {
    // ゲームの初期化
    this.gameService.initGame();
  }

  // リセットボタンを押したときの処理
  // 引数：なし
  // 戻り値：なし
  public resetGame() {
    // ゲームの初期化
    this.gameService.initGame();
    // ゲームのモードをplayに変更
    this.gameMode = 'play';
    // プレイヤーへのメッセージを変更
    this.text = 'カードを選択してください。';
  }

  // ユーザーがカードを選択したときの処理
  // 引数：Card
  // 戻り値：なし
  public selectCardUser(card: Card) {
    if (this.gameMode === 'play') {
      // ユーザーがカードを選択
      this.gameService.selectCard(this.gameService.User, card);
      // NPCがカードを選択
      this.gameService.selectNpcCard();
      // ゲームの結果を判定
      let winner = this.gameService.judge();
      // 使用したカードの削除
      if (this.gameService.User.selectedCard !== null && this.gameService.NPC.selectedCard !== null)
      {
        this.gameService.User.removeCard(this.gameService.User.selectedCard);
        this.gameService.NPC.removeCard(this.gameService.NPC.selectedCard);
      }
      // ゲームの結果に応じて処理を分岐
      if (winner === "User") {
        // ユーザーが勝利した場合
        this.text = 'あなたの勝ちです。もう一度遊ぶ場合はリセットボタンを押してください。';
        this.gameMode = 'end';
      }
      else if (winner === "NPC") {
        // NPCが勝利した場合
        this.text = 'あなたの負けです。もう一度遊ぶ場合はリセットボタンを押してください。';
        this.gameMode = 'end';
      }
      else {
        // 引き分けの場合
        this.text = '再度カードを選択してください。';
      }
    }
  }

}