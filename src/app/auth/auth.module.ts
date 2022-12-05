import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegitrationComponent } from './regitration/regitration.component';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegitrationComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
