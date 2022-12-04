import { Component, OnInit } from '@angular/core';

import { Subscription, interval, take } from 'rxjs';
import { Question } from 'src/app/admin/question';
import { QuestionsService } from 'src/app/admin/questions.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  isStartButtonVisible: boolean = true;
  ticker!: number;
  gameQuestion: Question | undefined;
  allQuestions: Question[] = [];
  questionIndex: number = 0;
  hint: string = '********';
  userAnswer: string = '';

  constructor(private questionService: QuestionsService) {}

  ngOnInit(): void {}

  startGame() {
    this.isStartButtonVisible = false;
    this.startTimer();
    this.questionService.getQuestions().subscribe((questions: Question[]) => {
      this.allQuestions = questions;
      this.nextQuestion();
    });
  }

  startTimer() {
    this.ticker = 60;
    const numbers = interval(1000);
    const countdown = numbers.pipe(take(this.ticker));
    countdown.subscribe((x) => {
      this.ticker -= 1;
      if (this.ticker == 0) {
        this.outOfTime();
      }
    });
  }
  nextQuestion() {
    if (this.gameQuestion && this.gameQuestion.answer != this.userAnswer) {
      alert('Wrong Answer');
    } else {
      this.gameQuestion = this.allQuestions[this.questionIndex];
      this.hint = this.generateHint(this.gameQuestion.answer);
      this.questionIndex++;
    }
  }

  generateHint(answer: string): string {
    let answerLengh = answer.length;
    let r = this.getRandomInt(answerLengh);
    let masked = '*'.repeat(answerLengh);

    return this.replaceChar(masked, answer[r], r);
  }

  replaceChar(origString: string, replaceChar: string, index: number): string {
    let firstPart = origString.substr(0, index);
    let lastPart = origString.substr(index + 1);

    let newString = firstPart + replaceChar + lastPart;
    return newString;
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  outOfTime() {
    console.log('Time Over');
    alert('Out of Time');
  }
}
