import { memeReducer } from './reducers/meme.reducer';
import { userReducer } from './reducers/user.reducer';

export const appReducers = {
    meme: memeReducer,
    user: userReducer
};