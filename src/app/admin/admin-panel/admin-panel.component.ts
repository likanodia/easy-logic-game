import { Component, OnInit, OnDestroy } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { Question } from '../question';
import { QuestionsService } from '../questions.service';
import { AddQuestionDialogComponent } from '../add-question-dialog/add-question-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'id',
    'answer',
    'firstPicture',
    'secondPicture',
    'action',
  ];
  dataSource: Question[] = [];
  questionSubscribtion: Subscription = new Subscription();

  constructor(
    private quesionService: QuestionsService,
    private dialog: MatDialog
  ) {
    this.getQuestions();
  }

  ngOnInit(): void {}

  getQuestions() {
    this.questionSubscribtion = this.quesionService
      .getQuestions()
      .subscribe((questions) => (this.dataSource = questions));    
  }

  delete(element: Question) {
    this.quesionService
      .deleteQuestion(element.id)
      .subscribe(() => this.getQuestions());
  }
  openDialog() {
    this.dialog
      .open(AddQuestionDialogComponent, {
        width: '30%',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result === 'true') {
          setTimeout(() => this.getQuestions(),500)
        }
      });
  }
  ngOnDestroy(): void {
    this.questionSubscribtion.unsubscribe();
  }
}
