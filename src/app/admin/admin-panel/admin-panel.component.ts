import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  displayedColumns: string[]=[
    "id", "answer", "firstPicture", "secondPicture"
  ]
  dataSource: Question[]=[
    {id: 1, answer: 'car', firstPicture: '', secondPicture: ''},
    {id: 2, answer: 'house', firstPicture: '', secondPicture: ''}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
