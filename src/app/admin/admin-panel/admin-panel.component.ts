import { Component, OnInit, OnDestroy } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { Question } from '../question';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit, OnDestroy {
  displayedColumns: string[]=[
    "id", "answer", "firstPicture", "secondPicture"
  ]
  dataSource: Question[] = []
  questionSubscribtion: Subscription
  
  constructor(private quesionService: QuestionsService) { 
   this.questionSubscribtion = quesionService.getQuestions().subscribe((questions)=> (this.dataSource = questions))
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.questionSubscribtion.unsubscribe()
  }

}
