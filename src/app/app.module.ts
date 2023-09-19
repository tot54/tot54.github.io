import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GameBoardComponent } from './Pages/game-board/game-board.component';
import { StartScreenComponent } from './Pages/start-screen/start-screen.component'; 
import { CardComponent } from './Components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    StartScreenComponent,
    CardComponent,
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
