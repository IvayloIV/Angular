import { MemeDetails } from 'src/app/core/models/meme/meme-details.model';

export interface MemeState {
    allMemes: MemeDetails[];
    memeDetails: MemeDetails;
    userMemes: MemeDetails[];
}
