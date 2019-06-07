import { AppState } from '../app.state';

export const allMemes = (state: AppState) => state.meme.allMemes;
export const memeDetails = (state: AppState) => state.meme.memeDetails;
export const userMemes = (state: AppState) => state.meme.userMemes;
