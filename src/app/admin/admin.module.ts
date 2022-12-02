import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule} from '@angular/material/icon'



@NgModule({
  declarations: [
    AdminPanelComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
  ],
  exports: [
    AdminPanelComponent
  ]
})
export class AdminModule { }
