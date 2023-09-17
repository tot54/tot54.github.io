import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent {
  // ゲームの説明を記載したページです。
  // ページ下部には「ゲームを始める」ボタンがあり、クリックするとゲーム画面に遷移します。

  constructor( private router: Router) { }

  // ゲーム画面に遷移する
  // 引数：なし
  // 戻り値：なし
  public startGame() {
    // ゲーム画面に遷移する
    this.router.navigate(['/game']);
  }

}
