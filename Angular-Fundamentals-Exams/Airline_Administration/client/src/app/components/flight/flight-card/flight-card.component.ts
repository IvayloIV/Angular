import { Component, Input } from '@angular/core';
import { FlightInfo } from 'src/app/core/models/flight/flight-info.model';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent {
  @Input() flight: FlightInfo;
}
