import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PetDetails } from 'src/app/core/models/pet/pet-details';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { petDetails } from 'src/app/store/selectors/pet.selector';
import { PetService } from 'src/app/core/services/pet.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent implements OnInit {
  petDetails$: Observable<PetDetails>;

  constructor(
    private store: Store<AppState>,
    private petService: PetService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.petDetails$ = this.store.select(petDetails);
  }

  like(petId: string, pet: PetDetails) {
    this.petService.likePet(petId, pet).subscribe(() => {
      this.toastr.success('Pet liked successfully.');
    });
  }

}
