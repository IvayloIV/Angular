import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { ToastrService } from 'ngx-toastr';

import { PetDetails } from 'src/app/core/models/pet/pet-details';
import { petDetails } from 'src/app/store/selectors/pet.selector';
import { PetService } from 'src/app/core/services/pet.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.scss']
})
export class PetEditComponent implements OnInit, OnDestroy {
  pet: PetDetails;
  description: string;
  sub: Subscription;

  constructor(
    private store: Store<AppState>,
    private petService: PetService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.store.select(petDetails).subscribe((data: PetDetails) => {
      this.pet = data;
      this.description = data.description;
    });
  }

  editPet() {
    this.pet.description = this.description;
    this.petService.editPet(this.pet._id, this.pet).subscribe(() => {
      this.toastr.success('Updated successfully!');
      this.router.navigate(['/pet/my']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
