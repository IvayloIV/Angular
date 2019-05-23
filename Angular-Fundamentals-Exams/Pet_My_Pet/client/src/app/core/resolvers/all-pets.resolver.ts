import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { AppState } from 'src/app/store/app.state';
import { PetService } from '../services/pet.service';
import { PetDetails } from '../models/pet/pet-details';
import { GetAllPets } from 'src/app/store/actions/pet.action';

@Injectable()
export class AllPetsResolver implements Resolve<boolean> {
    constructor(
        private petService: PetService,
        private store: Store<AppState>
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.petService.getPets()
            .pipe(tap((data: PetDetails[]) => {
                this.store.dispatch(new GetAllPets(data));
            }), mapTo(true));
    }

}
