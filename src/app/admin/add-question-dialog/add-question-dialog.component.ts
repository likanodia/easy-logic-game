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
  @ViewChild('fileUpload')
  public fileUpload!: ElementRef<HTMLInputElement>;

  questionForm = new FormGroup({
    answer: new FormControl('', [Validators.required]),
    firstPicture: new FormControl('', [Validators.required]),
    secondPicture: new FormControl('', [Validators.required]),
  });
  firstPicture: any;

  constructor(
    private questionService: QuestionsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}
  onAddQuestion() {
    console.log(this.questionForm.value);
    if (this.questionForm.valid) {
      this.questionService
        .addQuestion(this.questionForm.value as INewQuestion)
        .subscribe((data) => {
          this.questionForm.reset();
          this.dialog.closeAll();
        });
      error: () => {
        alert('ERR');
      };
    }
  }
  getBase64() {
    const file = this.fileUpload.nativeElement?.files![0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.firstPicture.setValue(reader.result, { emitEvent: false });
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
}
