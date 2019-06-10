import { FlightInfo } from 'src/app/core/models/flight/flight-info.model';
import { FlightDetails } from 'src/app/core/models/flight/flight-details.model';

export interface FlightState {
    publishFlights: FlightInfo[];
    flightDetails: FlightDetails;
    myFlights: FlightDetails[];
}
