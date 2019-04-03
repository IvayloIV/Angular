import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-edit-furniture',
  templateUrl: './edit-furniture.component.html',
  styleUrls: ['./edit-furniture.component.css']
})
export class EditFurnitureComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private furnitureService: FurnitureService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const data = this.route.data['value'].details;

    this.form = this.fb.group({
      make: [data.make, [Validators.required, Validators.minLength(4)]],
      model: [data.model, [Validators.required, Validators.minLength(4)]],
      year: [data.year, [Validators.required, Validators.min(1950), Validators.max(2050)]],
      description: [data.description, [Validators.required, Validators.minLength(10)]],
      price: [data.price, [Validators.required, Validators.min(0)]],
      image: [data.image, Validators.required],
      material: [data.material, Validators.nullValidator]
    });
  }

  edit() {
    const body = this.form.value;
    body._id = this.route.snapshot.params['id'];
    this.furnitureService.editFurniture(body).subscribe();
  }

  get f() {
    return this.form.controls;
  }
}
