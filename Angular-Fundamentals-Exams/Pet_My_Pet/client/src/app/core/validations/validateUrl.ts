import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
  if (!control.value.startsWith('http') && !control.value.startsWith('https')) {
    return { validUrl: false };
  }
  return null;
}
