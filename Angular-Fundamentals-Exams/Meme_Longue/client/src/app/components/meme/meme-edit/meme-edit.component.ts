import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ValidateUrl } from 'src/app/core/validations/validateUrl';

import { MemeService } from 'src/app/core/services/meme.service';
import { AppState } from 'src/app/store/app.state';
import { memeDetails } from 'src/app/store/selectors/meme.selector';

@Component({
  selector: 'app-meme-edit',
  templateUrl: './meme-edit.component.html',
  styleUrls: ['./meme-edit.component.scss']
})
export class MemeEditComponent implements OnInit, OnDestroy {
  form: FormGroup;
  creator: string;
  sub: Subscription;

  constructor(
    private fb: FormBuilder,
    private memeService: MemeService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  get f() {
    return this.form.controls;
  }

  buildForm() {
    this.sub = this.store.select(memeDetails).subscribe((meme) => {
      this.creator = meme.creator;
      this.form = this.fb.group({
        title: [meme.title, [Validators.required, Validators.maxLength(33)]],
        description: [meme.description, [Validators.required, Validators.minLength(30), Validators.maxLength(450)]],
        imageUrl: [meme.imageUrl, [Validators.required, ValidateUrl]]
      });
    });
  }

  editMeme() {
    const payload = this.form.value;
    const id = this.route.snapshot.params['id'];
    payload['creator'] = this.creator;

    this.memeService.editMeme(id, payload).subscribe((json) => {
      if (!json['error']) {
        this.toastr.success(`Meme ${payload['title']} updated.`);
        this.router.navigate([`/meme/details/${id}`]);
      } else {
        this.toastr.error(json['error']);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
