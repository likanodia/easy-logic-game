import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AdminPanelComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    AdminPanelComponent
  ]
})
export class AdminModule { }