import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AdminModule } from '../admin/admin.module';
import { GameModule } from '../game/game.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { LeaderboardModule } from '../leaderboard/leaderboard.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    AdminModule,
    GameModule,
    MatGridListModule,
    LeaderboardModule,
    AuthModule
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
