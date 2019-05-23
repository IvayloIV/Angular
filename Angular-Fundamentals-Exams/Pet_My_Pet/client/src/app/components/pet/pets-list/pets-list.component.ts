import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { allPets } from 'src/app/store/selectors/pet.selector';
import { Observable } from 'rxjs';
import { PetDetails } from 'src/app/core/models/pet/pet-details';
import { ActivatedRoute } from '@angular/router';
import { PetService } from 'src/app/core/services/pet.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
  
})
export class PetsListComponent implements OnInit {
  pets$: Observable<PetDetails[]>;
  category: string;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private petService: PetService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(({ category }) => {
      this.category = category;
    });
    
    this.pets$ = this.store.select(allPets);
  }

  like(petId: string, pet: PetDetails) {
    this.petService.likePet(petId, pet).subscribe(() => {
      this.toastr.success('Pet liked successfully.');
    });
  }

}
