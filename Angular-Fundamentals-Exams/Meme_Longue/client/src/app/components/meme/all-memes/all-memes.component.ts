import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MemeDetails } from 'src/app/core/models/meme/meme-details.model';
import { AppState } from 'src/app/store/app.state';
import { allMemes } from 'src/app/store/selectors/meme.selector';
import { MemeService } from 'src/app/core/services/meme.service';

@Component({
  selector: 'app-all-memes',
  templateUrl: './all-memes.component.html',
  styleUrls: ['./all-memes.component.scss']
})
export class AllMemesComponent implements OnInit {
  allMemes$: Observable<MemeDetails[]>;
  userId: string;

  constructor(
    private store: Store<AppState>,
    private memeService: MemeService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.allMemes$ = this.store.select(allMemes);
    this.userId = sessionStorage.getItem('userId');
  }

  removeMeme(id: string) {
    this.memeService.removeMeme(id).subscribe(() => {
      this.toastr.success('Removed successful.');
    });
  }
}
