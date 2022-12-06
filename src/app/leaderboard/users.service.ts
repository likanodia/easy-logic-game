import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:3000/users');
  }
  createUser(user: IUser): Observable<IUser> {
    user.highScore = 0;
    return this.http.post<IUser>('http://localhost:3000/users', user);
  }
}
