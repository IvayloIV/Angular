import { MemeState } from './states/meme.state';
import { UserState } from './states/user.state';

export interface AppState {
    meme: MemeState;
    user: UserState;
}