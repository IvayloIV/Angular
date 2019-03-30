import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
    const value = control.value;
    if (value.startsWith('http') && (value.endsWith('jpg') || value.endsWith('png'))) {
        return null;
    }
    
    return { validUrl: true };
}
