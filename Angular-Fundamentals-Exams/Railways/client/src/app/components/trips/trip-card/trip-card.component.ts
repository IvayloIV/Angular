import { Component, Input } from '@angular/core';
import { TripInfo } from 'src/app/core/contracts/trip/trip-info';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent {
  @Input() trip: TripInfo;
}
