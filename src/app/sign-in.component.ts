import {Component} from '@angular/core';

@Component({
  selector: 'app-sign-in',
  template: `
    <form (ngSubmit)="onSubmit(formSignIn)" #formSignIn="ngForm">
        <input placeholder="email" name="email" ngModel #txtEmail="ngModel" email required> <br> <br>
        <p *ngIf="txtEmail.touched && txtEmail.errors?.required">Email is required</p>
        <p *ngIf="txtEmail.touched && txtEmail.errors?.email">Email is invalid</p>
        <input type="password" placeholder="password" name="password" ngModel minlength="6" #txtPassword="ngModel" pattern="[a-z]*">
        <br> <br>
        <div class="" ngModelGroup="gender">
            <label for=""><input type="checkbox" ngModel name="male">Male</label> <br> <br>
            <label for=""><input type="checkbox" ngModel name="female">Female</label> <br> <br>
        </div>
        <button [disabled]="formSignIn.invalid">Submit</button>
    </form>
    <p>{{formSignIn.value | json}}</p>
    <p>{{txtPassword.errors | json}}</p>
    <p>{{txtEmail.errors | json}}</p>
  `
})

export class SignInComponent {
  onSubmit(formSignIn) {
    console.log(formSignIn);
    // throw new Error('Form is invalid');
  }
}
