export interface MemeDetails {
    _id: string;
    creator: string;
    title: string;
    description: string;
    imageUrl: string;
    _acl: {
        creator: string
    };
}