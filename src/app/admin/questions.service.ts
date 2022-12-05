import { Injectable } from '@angular/core';
import { INewQuestion, Question } from './question';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private http: HttpClient) {}
  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>('http://localhost:3000/questions');
  }
  deleteQuestion(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/questions/' + id);
  }
  addQuestion(data: INewQuestion) {
    return this.http.post<INewQuestion>(
      'http://localhost:3000/questions/',
      data
    );
  }
}
