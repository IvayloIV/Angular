import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AppState } from 'src/app/store/app.state';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { recipeDetails } from 'src/app/store/selectors/recipe.selector';

import { ValidateIngredients } from 'src/app/core/validations/validateIngredients';
import { ValidateUrl } from 'src/app/core/validations/validateUrl';
import categoryUrls from '../categoryUrls';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subs: Subscription;

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private toastr: ToastrService,
    private router: Router,
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subs = this.store.select(recipeDetails).subscribe((recipe) => {
      this.buildForm(recipe);
    });
  }

  buildForm(recipe) {
    this.form = this.fb.group({
      meal: [recipe.meal, [Validators.required, Validators.minLength(4)]],
      ingredients: [recipe.ingredients.join(','), [Validators.required, ValidateIngredients]],
      prepMethod: [recipe.prepMethod, [Validators.required, Validators.minLength(10)]],
      description: [recipe.description, [Validators.required, Validators.minLength(10)]],
      foodImageURL: [recipe.foodImageURL, [Validators.required, ValidateUrl]],
      category: [recipe.category, Validators.required],
      likesCounter: [recipe.likesCounter]
    });
  }

  get f() {
    return this.form.controls;
  }

  edit() {
    let payload = this.form.value;
    payload.categoryImageURL = categoryUrls[payload.category];
    payload.ingredients = payload.ingredients.split(',').map(a => a.trim());
    const recipeId = this.route.snapshot.params['id'];
    
    this.recipeService.editRecipe(recipeId, payload).subscribe((json) => {
      if (!json['error']) {
        this.toastr.success('Recipe edited successfully.');
        this.router.navigate([`/recipe/details/${recipeId}`]);
      }
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
