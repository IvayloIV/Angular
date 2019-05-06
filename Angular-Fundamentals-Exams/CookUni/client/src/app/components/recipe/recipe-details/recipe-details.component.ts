import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { RecipeDetails } from 'src/app/core/models/recipe/recipe-details.model';
import { recipeDetails } from 'src/app/store/selectors/recipe.selector';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe$: Observable<RecipeDetails>;
  userId: string;

  constructor(
    private store: Store<AppState>,
    private recipeService: RecipeService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userId = sessionStorage.getItem('userId');
    this.recipe$ = this.store.select(recipeDetails);
  }

  likeCurrentRecipe(recipe) {
    this.recipeService.likeRecipe(recipe._id, recipe).subscribe(() => {
      this.toastr.success('You liked that recipe.');
    });
  }
  
  removeRecipe(recipeId: string) {
    this.recipeService.removeRecipe(recipeId).subscribe(() => {
      this.toastr.success('Your recipe was archived.');
      this.router.navigate(['/']);
    });
  }
}
