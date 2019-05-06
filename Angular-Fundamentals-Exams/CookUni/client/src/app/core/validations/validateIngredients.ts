import { AbstractControl } from '@angular/forms';

export function ValidateIngredients(control: AbstractControl) {
  if (control.value.split(',').map(a => a.trim()).filter(a => a !== '').length < 2) {
    return { validIngredients: false };
  }
  return null;
}
