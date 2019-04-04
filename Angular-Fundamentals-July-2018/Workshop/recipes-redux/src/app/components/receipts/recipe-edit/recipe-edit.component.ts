import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RecipesService } from 'src/app/core/services/recipes.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppState } from 'src/app/store/app.store';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: string;
  form: FormGroup

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService,
    private builder: FormBuilder,
    private toastr: ToastrService,
    private route: Router,
    private store: Store<AppState>
  ) { 
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.recipeService.getRecipeToEdit(this.id)
      .subscribe(() => {
        this.store.select(state => state.recipes.edit)
          .subscribe((recipe) => {
            this.form = this.builder.group({
              name: new FormControl(recipe.name, Validators.required),
              imagePath: new FormControl(recipe.imagePath, Validators.required),
              description: new FormControl(recipe.description, Validators.required)
            });
          });
      })
  }

  edit() {
    const recipe = {
      [this.id]: { ...this.form.value }
    };

    this.recipeService.edit(recipe)
      .subscribe(() => {
        this.toastr.success('Edited successfully.');
        this.route.navigate([`recipes/details/${this.id}`]);
      });
  }
}
