import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ValidateUrl } from 'src/app/core/validations/validateUrl';
import { MemeService } from 'src/app/core/services/meme.service';

@Component({
  selector: 'app-create-meme',
  templateUrl: './create-meme.component.html',
  styleUrls: ['./create-meme.component.scss']
})
export class CreateMemeComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private memeService: MemeService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  get f() {
    return this.form.controls;
  }

  buildForm() {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(33)]],
      description: ['', [Validators.required, Validators.minLength(30), Validators.maxLength(450)]],
      imageUrl: ['', [Validators.required, ValidateUrl]]
    });
  }

  createMeme() {
    const payload = this.form.value;
    payload['creator'] = sessionStorage.getItem('username');
    
    this.memeService.createMeme(payload).subscribe((json) => {
      if (!json['error']) {
        this.toastr.success('Meme create successfull.');
        this.router.navigate(['/meme/all']);
      } else {
        this.toastr.error(json['description']);
      }
    });
  }
}
