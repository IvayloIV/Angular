export interface PetDetails {
    _id: string;
    name: string;
    imageURL: string;
    description: string;
    likes: number;
    category: string;
    _acl: {
        creator: string;
    }
}