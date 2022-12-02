import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Question } from '../question';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  displayedColumns: string[]=[
    "id", "answer", "firstPicture", "secondPicture"
  ]
  dataSource: Question[] = []
  
  constructor(private quesionService: QuestionsService) { 
   quesionService.getQuestions().subscribe((questions)=> (this.dataSource = questions))
  }

  ngOnInit(): void {
  }

}
