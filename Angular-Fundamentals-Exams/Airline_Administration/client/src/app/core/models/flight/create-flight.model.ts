export interface CreateFlight {
    destination: string;
    origin: string;
    departureDate: string;
    departureTime: string;
    seats: number;
    cost: number;
    image: string;
    isPublished: string;
}