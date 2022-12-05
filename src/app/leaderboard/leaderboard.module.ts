import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    LeaderboardComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports: [LeaderboardComponent]
})
export class LeaderboardModule { }
