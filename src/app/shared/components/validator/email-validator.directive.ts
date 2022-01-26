import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective implements Validator {
  private emailPattern = /[^ @]*@[^ @]*/;

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value && control.value.match(this.emailPattern)) {
      return null;
    } else {
      return { invalidEmail: 'Invalid email' };
    }
  }
}
