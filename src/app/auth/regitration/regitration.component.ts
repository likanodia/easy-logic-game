import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/leaderboard/user';
import { UsersService } from 'src/app/leaderboard/users.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-regitration',
  templateUrl: './regitration.component.html',
  styleUrls: ['./regitration.component.scss'],
})
export class RegitrationComponent {
  hide: boolean = true;
  registrationForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    admin: new FormControl(''),
  });

  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private router: Router
  ) {}

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get name() {
    return this.registrationForm.get('name') as FormControl;
  }
  get lastname() {
    return this.registrationForm.get('lastname') as FormControl;
  }
  get admin() {
    return this.registrationForm.get('admin') as FormControl;
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePass() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return this.password.hasError('password') ? 'Not a valid password' : '';
  }

  getErrorMessageName() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return this.password.hasError('password') ? 'Not a valid name' : '';
  }
  getErrorMessageLastName() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return this.password.hasError('password') ? 'Not a valid lastname' : '';
  }
  submitForm(): void {
    if (this.registrationForm.valid) {
      this.userService
        .createUser(<IUser><unknown>this.registrationForm.value )
        .subscribe((result) => {
          if (this.admin.value) {
            this.authService.setUserRoleAndId('admin', result.id.toString());
          } else {
            this.authService.setUserRoleAndId('user', result.id.toString());
          }
          this.router.navigate(['leaderboard']);
        });
    }
  }
}
