import { Directive, Input } from '@angular/core';
import { NG_ASYNC_VALIDATORS, Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { of } from 'rxjs';

@Directive({
  selector: '[startsWith]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CustomValidatorDirective,
    multi: true
  }]
})
export class CustomValidatorDirective implements Validator{

  constructor() { }

  @Input('startsWith') expr

  validate(control: AbstractControl) {
    if(control.value && !control.value.startsWith(this.expr)){
      return {"startsWith" : control.value}
    }
    return null
  }
  

  

}
