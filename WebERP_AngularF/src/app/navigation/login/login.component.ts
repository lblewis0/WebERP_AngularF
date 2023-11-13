import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginAuthentificationService } from '../../shared/services/login-authentification.service';
import { Router } from '@angular/router';
import { LoginForm } from '../../shared/models/login-form';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  isConnected! : boolean;

  loginFormGroup!: FormGroup;

  constructor(
    private _formBuilder : FormBuilder,
    private _authService: LoginAuthentificationService,
    private _router: Router
  )
  {

    this.loginFormGroup = this._formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  ngOnInit(): void 
  {
    this.isConnected = this._authService.isConnected;
  }

  logout() : void
  {
    this._authService.logout();
    this.isConnected = this._authService.isConnected;
  }

  onSubmit() : void
  {
    console.log("In submit --login")

    if(this.loginFormGroup.valid)
    {
      console.log("--first validations: OK");

      let loginForm : LoginForm = this.loginFormGroup.value;

      this._authService.login(loginForm);
      this.isConnected = this._authService.isConnected;

      if(this.isConnected)
      {
        console.log(`--isConnected ${this.isConnected}`);
        this._router.navigate(["home"]);
      }
    }
    else
    {
      console.log("--first validations: KO");
    }
  }

}
