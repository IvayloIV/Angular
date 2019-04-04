import { Component, OnInit } from '@angular/core';
import { IDetailsRecipe } from 'src/app/core/contracts/IDetailsRecipe';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.store';
import { Observable } from 'rxjs';
import { RecipesService } from 'src/app/core/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes$: Observable<IDetailsRecipe[]>;

  constructor(
    private recipeService: RecipesService,
    private store: Store<AppState>  
  ) { }

  ngOnInit() {
    this.recipeService.getAll().subscribe(() => {
      this.recipes$ = this.store.select(state => state.recipes.all);
    });
  }

}
