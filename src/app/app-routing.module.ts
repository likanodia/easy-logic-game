import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth/auth.component';
import { NotfoundComponent } from './auth/notfound/notfound.component';
import { GameBoardComponent } from './game/game-board/game-board.component';
import { HeaderComponent } from './header/header/header.component';
import { LeaderboardComponent } from './leaderboard/leaderboard/leaderboard.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: '', redirectTo: '/leaderboard', pathMatch: 'full' },
  {
    path: '',
    component: HeaderComponent,
    children: [
      { path: 'game', component: GameBoardComponent },
      { path: 'leaderboard', component: LeaderboardComponent },
      { path: 'admin', component: AdminPanelComponent },
    ],
    canActivate: [AuthGuard],
  },

  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
