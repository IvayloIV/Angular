import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { AppState } from 'src/app/store/app.state';
import { RecipeService } from '../services/recipe.service';
import { GetRecipeDetails } from 'src/app/store/actions/recipe.action';
import { RecipeDetails } from '../models/recipe/recipe-details.model';

@Injectable()
export class RecipeDetailsResolver implements Resolve<boolean> {
    constructor(
        private recipeService: RecipeService,
        private store: Store<AppState>
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const recipeId = route.params['id'];
        return this.recipeService.recipeDetails(recipeId)
            .pipe(tap((data: RecipeDetails) => {
                this.store.dispatch(new GetRecipeDetails(data));
            }), mapTo(true));
    }

}
