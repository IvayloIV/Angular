import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AppState } from 'src/app/store/app.state';
import { petDetails } from 'src/app/store/selectors/pet.selector';
import { PetDetails } from 'src/app/core/models/pet/pet-details';
import { PetService } from 'src/app/core/services/pet.service';

@Component({
  selector: 'app-pet-remove',
  templateUrl: './pet-remove.component.html',
  styleUrls: ['./pet-remove.component.scss']
})
export class PetRemoveComponent implements OnInit {
  pet$: Observable<PetDetails>;

  constructor(
    private store: Store<AppState>,
    private petService: PetService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pet$ = this.store.select(petDetails);
  }

  removePet(petId: string) {
    this.petService.removePet(petId).subscribe(() => {
      this.toastr.success('Pet removed successfully!');
      this.router.navigate(['/pet/my']);
    });
  }
}
