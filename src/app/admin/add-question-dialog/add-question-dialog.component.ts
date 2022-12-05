import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { INewQuestion, Question } from '../question';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-add-question-dialog',
  templateUrl: './add-question-dialog.component.html',
  styleUrls: ['./add-question-dialog.component.scss'],
})
export class AddQuestionDialogComponent implements OnInit {
  @ViewChild('firstFileUpload')
  public firstFileUpload!: ElementRef<HTMLInputElement>;
  @ViewChild('secondFileUpload')
  public secondFileUpload!: ElementRef<HTMLInputElement>;

  questionForm = new FormGroup({
    answer: new FormControl('', [Validators.required]),
    firstPicture: new FormControl('', [Validators.required]),
    secondPicture: new FormControl('', [Validators.required]),
  });
  firstPictureBase64: string = '';
  secondPictureBase64: string = '';

  constructor(
    private questionService: QuestionsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}
  onAddQuestion() {
    console.log(this.questionForm.value);

    if (this.questionForm.valid) {
      this.questionService
        .addQuestion({
          answer: this.questionForm.value.answer,
          firstPicture: this.firstPictureBase64,
          secondPicture: this.secondPictureBase64,
        } as INewQuestion)
        .subscribe((data) => {
          this.questionForm.reset();
          this.dialog.closeAll();
        });
      error: () => {
        alert('ERR');
      };
    }
  }

  getFirstPictureBase64() {
    const file = this.firstFileUpload.nativeElement?.files![0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.firstPictureBase64 = reader.result as string;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  getSecondPictureBase64() {
    const file = this.secondFileUpload.nativeElement?.files![0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.secondPictureBase64 = reader.result as string;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
}
