import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appNoSpaces]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NoSpacesDirective,
      multi: true,
    },
  ],
})
export class NoSpacesDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    return control?.value?.includes(' ') ? { noSpaces: true } : null;
  }
  
}
