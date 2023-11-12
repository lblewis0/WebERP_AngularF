import { Injectable } from '@angular/core';
import { LoginForm } from '../models/login-form';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthentificationService {

  isConnected : boolean = false

  constructor() { }

  login(loginForm: LoginForm)
  {
    if(loginForm.username === "Louis" && loginForm.password === "accolades")
    {
      this.isConnected = true;
      console.log('--login() from FakeAuthentificationService');
      
    }
  }

  logout()
  {
    this.isConnected = false;
    console.log('--logout() from FakeAuthentificationService');
  }
}
