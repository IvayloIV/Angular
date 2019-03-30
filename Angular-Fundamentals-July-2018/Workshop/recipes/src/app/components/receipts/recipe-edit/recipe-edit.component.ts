import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/core/services/recipes.service';
import { IRecipe } from 'src/app/core/contracts/IRecipe';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
    private route: Router
  ) { 
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    const recipe: IRecipe = this.activatedRoute.snapshot.data['getDetails'];
    this.form = this.builder.group({
      name: new FormControl(recipe.name, Validators.required),
      imagePath: new FormControl(recipe.imagePath, Validators.required),
      description: new FormControl(recipe.description, Validators.required)
    });
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
