import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PetDetails } from 'src/app/core/models/pet/pet-details';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { myPets } from 'src/app/store/selectors/pet.selector';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.scss']
})
export class MyPetsComponent implements OnInit {
  pets$: Observable<PetDetails[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.pets$ = this.store.select(myPets);
  }

}
