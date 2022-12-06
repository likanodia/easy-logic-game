import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/leaderboard/user';
import { UsersService } from 'src/app/leaderboard/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  loggedInUser: IUser | undefined;
  constructor(private auth: AuthService, private userService: UsersService) {
    let userId = this.auth.getUserId();
    this.userService.getUser(userId).subscribe((user) => {
      this.loggedInUser = user;
    });
  }

  ngOnInit(): void {}

  signOut(): void {
    this.auth.logout();
  }
  isUserAdmin(): boolean {
    return this.auth.isAdmin();
  }
}
