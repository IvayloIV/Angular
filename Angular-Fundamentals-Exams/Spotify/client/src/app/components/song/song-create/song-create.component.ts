import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateUrl } from 'src/app/core/validations/validateUrl';
import { SongService } from 'src/app/core/services/song.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.scss']
})
export class SongCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private songService: SongService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(6)]],
      artist: ['', [Validators.required, Validators.minLength(3)]],
      imageUrl: ['', [Validators.required, ValidateUrl]]
    });
  }

  get f() {
    return this.form.controls;
  }

  createSong() {
    const { title, artist, imageUrl } = this.form.value;

    const body = {
      title,
      artist,
      imageUrl,
      likes: 0,
      listened: 0
    };

    this.songService.createSong(body)
      .subscribe(() => {
        this.toast.success('Song created success.');
        this.router.navigate(['/song/all']);
      });
  }

}
