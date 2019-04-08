import { Component, Input } from '@angular/core';
import { MyTrip } from 'src/app/core/contracts/trip/my-tips';

@Component({
  selector: 'app-my-trips-card',
  templateUrl: './my-trips-card.component.html',
  styleUrls: ['./my-trips-card.component.css']
})
export class MyTripsCardComponent {
  @Input() trip: MyTrip;
  
}
