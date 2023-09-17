import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartScreenComponent } from './Pages/start-screen/start-screen.component';
import { GameBoardComponent } from './Pages/game-board/game-board.component';

const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'game', component: GameBoardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
