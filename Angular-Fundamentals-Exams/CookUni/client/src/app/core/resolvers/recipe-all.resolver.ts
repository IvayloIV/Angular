import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { AppState } from 'src/app/store/app.state';
import { RecipeService } from '../services/recipe.service';
import { RecipeInfo } from '../models/recipe/recipe-info.model';
import { GetAllRecipes } from 'src/app/store/actions/recipe.action';

@Injectable()
export class RecipeAllResolver implements Resolve<boolean> {
    constructor(
        private recipeService: RecipeService,
        private store: Store<AppState>
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.recipeService.getAllRecipes()
            .pipe(tap((data: RecipeInfo[]) => {
                this.store.dispatch(new GetAllRecipes(data));
            }), mapTo(true));
    }

}
