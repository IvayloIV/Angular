import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PetService } from 'src/app/core/services/pet.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.scss']
})
export class PetCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private petService: PetService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageURL: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  get f() {
    return this.form.controls;
  }

  createPet() {
    let { name, description, imageURL, category } = this.form.value;
    this.petService.createPet({
      name,
      description,
      imageURL,
      category,
      likes: 0
    }).subscribe(() => {
      this.toastr.success('Pet created.');
      this.router.navigate([ '/pet/all' ]);
    });
  }

}
