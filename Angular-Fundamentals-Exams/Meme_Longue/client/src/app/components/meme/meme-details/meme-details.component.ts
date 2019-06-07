import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { ToastrService } from 'ngx-toastr';

import { MemeDetails } from 'src/app/core/models/meme/meme-details.model';
import { memeDetails } from 'src/app/store/selectors/meme.selector';
import { MemeService } from 'src/app/core/services/meme.service';

@Component({
  selector: 'app-meme-details',
  templateUrl: './meme-details.component.html',
  styleUrls: ['./meme-details.component.scss']
})
export class MemeDetailsComponent implements OnInit {
  meme$: Observable<MemeDetails>;
  userId: string;

  constructor(
    private store: Store<AppState>,
    private memeService: MemeService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.meme$ = this.store.select(memeDetails);
    this.userId = sessionStorage.getItem('userId');
  }

  removeMeme(id: string) {
    this.memeService.removeMeme(id).subscribe(() => {
      this.toastr.success('Removed successful.');
      this.router.navigate(['/meme/all']);
    });
  }

}
