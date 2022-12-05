import { Component, OnInit } from '@angular/core';
import { IUser } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {
  displayedColumns: string[] = ['number', 'name', 'score'];
  dataSource: IUser[] = [];

  constructor(private userService: UsersService) {
    this.getLeaderBoardData();
  }
  getLeaderBoardData() {
    this.userService.getUsers().subscribe((users) => (this.dataSource = users));
  }

  ngOnInit(): void {}
}
