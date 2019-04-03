import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private furnitureService: FurnitureService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      make: ['', [Validators.required, Validators.minLength(4)]],
      model: ['', [Validators.required, Validators.minLength(4)]],
      year: ['', [Validators.required, Validators.min(1950), Validators.max(2050)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required, Validators.min(0)]],
      image: ['', Validators.required],
      material: ['', Validators.nullValidator]
    });
  }

  create() {
    const body = this.form.value;
    this.furnitureService.createFurniture(body)
      .subscribe();
  }

  get f() {
    return this.form.controls;
  }
}
