import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HotelService } from 'src/app/core/services/hotel.service';

@Component({
  selector: 'app-hotel-create',
  templateUrl: './hotel-create.component.html',
  styleUrls: ['./hotel-create.component.css']
})
export class HotelCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private hotelService: HotelService 
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      numberOfRooms: ['', [Validators.required, Validators.min(0)]],
      image: [''],
      parkingSlots: ['', [Validators.required, Validators.min(0)]],
    });
  }

  get f() {
    return this.form.controls;
  }

  create() {
    const payload = this.form.value;
    this.hotelService.createHotel(payload).subscribe();
  }
}
