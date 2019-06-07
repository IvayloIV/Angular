import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AppState } from 'src/app/store/app.state';

import { MemeService } from 'src/app/core/services/meme.service';
import { UserService } from 'src/app/core/services/user.service';

import { UserDetails } from 'src/app/core/models/user/user-details.model';
import { userDetails } from 'src/app/store/selectors/user.selector';
import { MemeDetails } from 'src/app/core/models/meme/meme-details.model';
import { userMemes } from 'src/app/store/selectors/meme.selector';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user$: Observable<UserDetails>;
  userMemes$: Observable<MemeDetails[]>;
  userId: string;

  constructor(
    private store: Store<AppState>,
    private memeService: MemeService,
    private userService: UserService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user$ = this.store.select(userDetails);
    this.userMemes$ = this.store.select(userMemes);
    this.userId = sessionStorage.getItem('userId');
  }

  removeMeme(memeId: string) {
    this.memeService.removeMeme(memeId).subscribe(() => {
      this.toast.success('Meme removed successfully.');
    });
  }

  removeUser(userId: string) {
    this.userService.removeUser(userId).subscribe(() => {
        sessionStorage.clear();
        this.router.navigate(['/']);
        this.toast.success('Removed successfully.');
    });
  }

}
