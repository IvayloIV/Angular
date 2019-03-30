import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive({
  selector: '[appImageUrl]'
})
export class ImageUrlDirective {

  constructor(
    private elRef: ElementRef, 
    private form: NgForm) { }

    @HostListener('input') oninput() {
      const value = this.form.controls.imageUrl.value;

      if (value.startsWith('http') && (value.endsWith('jpg') || value.endsWith('png'))) {
        this.elRef.nativeElement.style.borderLeft = '5px solid green';
        this.form.controls.imageUrl.setErrors(null);
      } else {
        this.elRef.nativeElement.style.borderLeft = '5px solid red';
        this.form.controls.imageUrl.setErrors({ image: true });
      }
    }

}
