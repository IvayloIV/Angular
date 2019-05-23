import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';

import { PetDetails } from '../models/pet/pet-details';
import { LikePet } from 'src/app/store/actions/pet.action';
import { PetCreate } from '../models/pet/pet-create';

const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_ByuSzo8b4';
const PET_URL = BASE_URL + 'appdata/' + APP_KEY + '/pets';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  getPets(): Observable<PetDetails[]> {
    return this.http.get<PetDetails[]>(`${PET_URL}?query={}&sort={"likes": -1}`);
  }

  likePet(petId: string, pet: PetDetails) {
    return this.http.put(PET_URL + `/${petId}`, Object.assign({}, pet, {
      likes: Number(pet.likes) + 1
    })).pipe(tap(() => {
      this.store.dispatch(new LikePet(petId));
    }));
  }

  createPet(newPet: PetCreate) {
    return this.http.post(PET_URL, newPet);
  }

  getMyPets(): Observable<PetDetails[]> {
    const userId = sessionStorage.getItem('userId');
    return this.http.get<PetDetails[]>(PET_URL + `?query={"_acl.creator":"${userId}"}`);
  }

  getPetDetails(id: string): Observable<PetDetails> {
    return this.http.get<PetDetails>(PET_URL + `/${id}`);
  }

  editPet(id: string, pet: PetDetails) {
    return this.http.put(PET_URL + `/${id}`, pet);
  }

  removePet(id: string) {
    return this.http.delete(PET_URL + `/${id}`);
  }
}
