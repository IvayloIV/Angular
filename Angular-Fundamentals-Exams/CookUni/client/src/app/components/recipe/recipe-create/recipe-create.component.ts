import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ValidateIngredients } from 'src/app/core/validations/validateIngredients';
import { ValidateUrl } from 'src/app/core/validations/validateUrl';
import { RecipeService } from 'src/app/core/services/recipe.service';
import categoryUrls from '../categoryUrls'

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      meal: ['', [Validators.required, Validators.minLength(4)]],
      ingredients: ['', [Validators.required, ValidateIngredients]],
      prepMethod: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      foodImageURL: ['', [Validators.required, ValidateUrl]],
      category: ['', Validators.required]
    });
  }

  get f() {
    return this.form.controls;
  }

  create() {
    let payload = this.form.value;
    payload.categoryImageURL = categoryUrls[payload.category];
    payload.likesCounter = 0;
    payload.ingredients = payload.ingredients.split(',').map(a => a.trim());
    
    this.recipeService.createRecipe(payload).subscribe((json) => {
      if (!json['error']) {
        this.toastr.success('Recipe created successfully.');
        this.router.navigate(['/']);
      }
    });
  }
}
