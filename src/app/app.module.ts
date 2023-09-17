import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GameBoardComponent } from './Pages/game-board/game-board.component';
import { StartScreenComponent } from './Pages/start-screen/start-screen.component'; 
import { CardComponent } from './Components/card/card.component';
import { PlayerHandComponent } from './Components/player-hand/player-hand.component';
import { NpcHandComponent } from './Components/npc-hand/npc-hand.component';
import { ResultComponent } from './Components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    StartScreenComponent,
    CardComponent,
    PlayerHandComponent,
    NpcHandComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
