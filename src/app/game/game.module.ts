import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameBoardComponent } from './game-board/game-board.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    GameBoardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    GameBoardComponent
  ]
})
export class GameModule { }
