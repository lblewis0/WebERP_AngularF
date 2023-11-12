import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn} from '@angular/forms'; 

@Injectable({
  providedIn: 'root'
})
export class InputValidationFunctionsService {

  constructor() { }

  validationNoSpace(): ValidatorFn | null
  {
    return (control: AbstractControl) => {

      const regex = new RegExp(/^[^\s]+$/);
      if(!regex.test(control.value))
      {
        return {validationNoSpace: true};
      }
      else
      {
        return null;
      }
    }
  }

  validationNoNumbers(): ValidatorFn | null
  {
    return (control: AbstractControl) => {

      const regex = new RegExp(/^[^0-9]+$/);
      if(!regex.test(control.value))
      {
        return {validationNoNumbers: true}
      }
      else
      {
        return null;
      }
    }
  }

  validationNoSpecialCaracters(): ValidatorFn | null
  {
    return (control: AbstractControl) => {

      const regex = new RegExp(/^[^$&!|#/\:;?_]+$/);
      if(!regex.test(control.value))
      {
        return {validationNoSpecialCaracters: true}
      }
      else
      {
        return null;
      }
    }
  }

  validationOnlyNumbers(): ValidatorFn | null
  {
    return (control: AbstractControl) => {

      const regex = new RegExp(/^[0-9]+$/);
      if(control.value)
      {
        if(!regex.test(control.value))
        {
          return {validationOnlyNumbers: true}
        }
        else
        {
          return null;
        }
      }
      else
      {
        return null;
      }
      
    }
  }

  validationBetween2and32() : ValidatorFn | null
  {
    return (control: AbstractControl) => {

      const regex = new RegExp(/^(.{2,32})$/);
      if(control.value)
      {
        if(!regex.test(control.value))
        {
          return {validationBetween2and32: true}
        }
        else
        {
          return null;
        }
      }
      else
      {
        return {validationBetween2and32: true};
      }
      
    }
  }

  validation4Numbers() : ValidatorFn | null
  {
    return (control: AbstractControl) => {

      const regex = new RegExp(/^(.{4})$/);
      if(control.value)
      {
        if(!regex.test(control.value))
        {
          return {validation4Numbers: true}
        }
        else
        {
          return null;
        }
      }
      else
      {
        return {validationBetween2and32: true};
      }
      
    }
  }
}
