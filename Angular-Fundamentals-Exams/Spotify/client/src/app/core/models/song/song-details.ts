export interface SongDetails {
    title: string;
    imageUrl: string;
    artist: string;
    likes: number;
    listened: number;
    _acl: {
        creator: string
    }
    _id: string;
}
