import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator, ValidationErrors } from '@angular/forms';
import { passwordMatch } from './validators/validators';

@Directive({
  selector: '[passwordsMatch]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordsMatchDirective,
    multi: true
  }]
})
export class PasswordsMatchDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {

    return passwordMatch(control);

  }
}