import { CanActivateFn, Router } from '@angular/router';
import { LoginAuthentificationService } from '../services/login-authentification.service';
import { Inject } from '@angular/core';

export const isAuthGuard: CanActivateFn = (route, state) => {

  //inject a été remplacé par Inject --> Demander a Steve ou Sebastien
  // let service: LoginAuthentificationService = Inject(LoginAuthentificationService);
  let router : Router = Inject(Router);
  console.log(`--guard: is-auth ${localStorage.getItem("isConnected")}`);

  if(localStorage.getItem("isConnected"))
  {
    return true;
  }
  else
  {
    router.navigate(["login"])
    return false;
  }

  // if(service.isConnected)
  // {
  //   return true
  // }
  // else
  // {
  //   router.navigate(["home"]);
  //   return false;
  // }
};
