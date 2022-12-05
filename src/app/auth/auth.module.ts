import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegitrationComponent } from './regitration/regitration.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegitrationComponent,
    NotfoundComponent,
    
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatCheckboxModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  exports:[
    AuthComponent,
  ]
})
export class AuthModule { }
