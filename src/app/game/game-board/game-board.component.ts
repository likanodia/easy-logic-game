import { Component, OnInit } from '@angular/core';
import { Subscription, interval, take } from 'rxjs';
import { Question } from 'src/app/admin/question';
import { QuestionsService } from 'src/app/admin/questions.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/leaderboard/user';
import { UsersService } from 'src/app/leaderboard/users.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent {
  isStartButtonVisible: boolean = true;
  ticker!: number;
  gameQuestion: Question | undefined;
  allQuestions: Question[] = [];
  questionIndex: number = 0;
  gameTime: number = 60;
  hint: string = '********';
  userAnswer: string = '';
  userScore: number;
  isSkipButtonVisible: boolean = true;
  isGameOver: boolean = false;
  userPlaying: IUser | undefined;
  isGameLogicVisible: boolean = true;
  isTimerHidden:  boolean = true;

  constructor(
    private questionService: QuestionsService,
    private userService: UsersService,
    private auth: AuthService
  ) {
    this.userScore = 0;
    let userId = this.auth.getUserId();
    this.userService.getUser(userId).subscribe((user: IUser) => {
      this.userPlaying = user;
    });
  }

  startGame() {
    this.isStartButtonVisible = false;
    this.startTimer();
    this.questionService.getQuestions().subscribe((questions: Question[]) => {
      this.allQuestions = questions;
      this.nextQuestion();
    });
  }

  startTimer() {
    this.ticker = this.gameTime;
    const numbers = interval(1000);
    const countdown = numbers.pipe(take(this.ticker));
    countdown.subscribe((x) => {
      this.ticker -= 1;
      if (this.ticker == 0) {
        this.outOfTime();
      }
    });
  }

  checkAnswer() {
    if (this.isCorrectAnswer()) {
      this.userScore++;
      this.nextQuestion();
    }
  }

  gameOver() {
    this.isGameOver = true;
    if (this.userScore > this.userPlaying!.highScore) {
      this.userService
        .updateScore(this.userPlaying!.id, this.userScore)
        .subscribe();
    }
  }

  nextQuestion() {
    if (this.questionIndex == this.allQuestions.length) {
      this.gameOver();
      return;
    }

    if (this.isLastQuestion()) {
      this.isSkipButtonVisible = false;
    }
    this.gameQuestion = this.allQuestions[this.questionIndex];
    this.hint = this.generateHint(this.gameQuestion.answer);
    this.questionIndex++;
    this.userAnswer = '';
  }

  private isLastQuestion(): boolean {
    return this.questionIndex == this.allQuestions.length - 1;
  }

  skipQuestion() {
    this.nextQuestion();
    this.isSkipButtonVisible = false;
  }

  isCorrectAnswer(): boolean {
    if (this.gameQuestion && this.gameQuestion.answer != this.userAnswer) {
      return false;
    } else {
      return true;
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
    this.gameOver();
    this.isGameLogicVisible = false;
    this.isTimerHidden = false;
    setTimeout(() => {
      this.isTimerHidden = true;
    }, 2000);
  }
}
