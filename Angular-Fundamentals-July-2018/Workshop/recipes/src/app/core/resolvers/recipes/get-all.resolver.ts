import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { IDetailsRecipe } from '../../contracts/IDetailsRecipe';
import { RecipesService } from '../../services/recipes.service';

@Injectable()
export class GetAllResolver implements Resolve<IDetailsRecipe[]> {
    constructor(
        private recipesService: RecipesService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IDetailsRecipe[]> {
        return this.recipesService.getAll();
    }
}
