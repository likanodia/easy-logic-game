import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    AdminModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
