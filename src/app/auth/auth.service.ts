import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, of, throwError } from 'rxjs';
import { IUser } from '../leaderboard/user';
import { UsersService } from '../leaderboard/users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private userService: UsersService) {}
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    return this.userService.findUsers(email, password).pipe(
      map((users: IUser[]) => {
        if (users.length == 0) {
          throw new Error('Failed to Login');
        }
        let user = users[0];
        if (user.isAdmin) {
          this.setToken('admin');
        } else {
          this.setToken('user');
        }
        return of({ name: user.name, email: user.email });
      })
    );
  }

  isAdmin(): boolean {
    return this.getToken() == 'admin';
  }
}
