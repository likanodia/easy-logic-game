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
    "id", "answer", "firstPicture", "secondPicture", "action"
  ]
  dataSource: Question[] = []
  questionSubscribtion: Subscription = new Subscription;
  
  constructor(private quesionService: QuestionsService) { 
    this.getQuestions()
  }

  ngOnInit(): void {
  }

  getQuestions(){
    this.questionSubscribtion = this.quesionService.getQuestions().subscribe((questions)=> (this.dataSource = questions))
  }

  delete(element:Question){
    this.quesionService.deleteQuestion(element.id).subscribe(()=>(this.getQuestions()))
  }
  ngOnDestroy(): void {
    this.questionSubscribtion.unsubscribe()
  }

}
