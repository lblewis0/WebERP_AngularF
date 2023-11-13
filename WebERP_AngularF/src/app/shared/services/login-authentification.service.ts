import { Injectable } from '@angular/core';
import { LoginForm } from '../models/login-form';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthentificationService {

  isConnected : boolean = false

  constructor() 
  {
    
  }

  login(loginForm: LoginForm)
  {
    if(loginForm.username === "Louis" && loginForm.password === "test1234")
    {
      this.isConnected = true;
      localStorage.setItem("isConnected", "true");
      console.log('--login() from login-authentification');
      console.log(`--local storage(isConnected): ${localStorage.getItem("isConnected")}`);
      
    }
  }

  logout()
  {
    this.isConnected = false;
    localStorage.setItem("isConnected", "false");
    console.log('--logout() from login-authentification');
    console.log(`--local storage(isConnected): ${localStorage.getItem("isConnected")}`);
  }
}
