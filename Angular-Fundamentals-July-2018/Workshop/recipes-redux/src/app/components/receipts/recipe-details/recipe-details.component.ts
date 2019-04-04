import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { RecipesService } from 'src/app/core/services/recipes.service';
import { IRecipe } from 'src/app/core/contracts/IRecipe';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/app.store';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  id: string;
  recipe$: Observable<IRecipe>;

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private store: Store<AppState>
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.recipesService.getDetails(this.id)
      .subscribe(() => {
        this.recipe$ = this.store
          .pipe(select(state => state.recipes.details));
      });
  }

  remove() {
    this.recipesService.remove(this.id)
      .subscribe(() => {
        this.toastr.success('Removed success.');
        this.router.navigate(['/recipes/list']);
      });
  }

}
