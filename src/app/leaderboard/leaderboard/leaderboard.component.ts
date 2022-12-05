import { Component, OnInit } from '@angular/core';
import { IUser } from '../user';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {
  displayedColumns: string[] = ['number', 'name', 'score'];
  dataSource: IUser[] = [
    {
      id: 1,
      name: 'lika',
      lastName: '',
      email: '',
      password: '',
      highScore: 5,
      isAdmin: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
