import { Injectable } from '@angular/core';
import { Question } from './question';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private dataSource: Question[]=[
    {id: 1, answer: 'car', firstPicture: '', secondPicture: ''},
    {id: 2, answer: 'house', firstPicture: '', secondPicture: ''}
  ];
  constructor(private http: HttpClient) { }
  getQuestions(): Observable<Question[]>{
    return this.http.get<Question[]>("http://localhost:3000/questions")
  }
}
