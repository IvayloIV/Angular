export interface FlightDetails {
    _id: string;
    _acl: {
        creator: string
    };
    destination: string;
    origin: string;
    departureDate: string;
    departureTime: string;
    seats: number;
    cost: number;
    image: string;
    isPublished: string;
}