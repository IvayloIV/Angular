import { TripInfo } from 'src/app/core/contracts/trip/trip-info';
import { MyTrip } from 'src/app/core/contracts/trip/my-tips';

export interface TripState {
    tripsList: TripInfo[];
    tripDetails: TripInfo;
    myTrips: MyTrip[];
}