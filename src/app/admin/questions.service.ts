import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  dataSource: Question[]=[
    {id: 1, answer: 'car', firstPicture: '', secondPicture: ''},
    {id: 2, answer: 'house', firstPicture: '', secondPicture: ''}
  ];
  constructor() { }
}
