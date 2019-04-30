export interface EventDetails {
    _id: string;
    name: string;
    dateTime: string;
    description: string;
    imageURL: string;
    peopleInterestedIn: number;
    organizer: string;
    _acl: {
        creator: string;
    }
}