import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { allRecipes } from 'src/app/store/selectors/recipe.selector';
import { Observable } from 'rxjs';
import { RecipeInfo } from 'src/app/core/models/recipe/recipe-info.model';

@Component({
  selector: 'app-recipe-all',
  templateUrl: './recipe-all.component.html',
  styleUrls: ['./recipe-all.component.scss']
})
export class RecipeAllComponent implements OnInit {
  allRecipes$: Observable<RecipeInfo[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.allRecipes$ = this.store.select(allRecipes);
  }

}
