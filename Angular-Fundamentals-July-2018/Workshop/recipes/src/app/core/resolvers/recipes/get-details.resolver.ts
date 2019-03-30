import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { RecipesService } from '../../services/recipes.service';
import { IRecipe } from '../../contracts/IRecipe';

@Injectable()
export class GetDetailsResolver implements Resolve<IRecipe> {
    constructor(
        private recipesService: RecipesService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRecipe> {
        const id = route.params['id'];
        return this.recipesService.getDetails(id);
    }
}
