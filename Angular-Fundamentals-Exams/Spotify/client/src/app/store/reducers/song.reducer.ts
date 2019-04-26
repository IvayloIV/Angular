import { SongState } from "../states/song.state";
import * as SongAction from '../actions/song.action';

const initialState: SongState = {
    songs: []
};

function setAllSongs(state: SongState, payload) {
    return Object.assign({}, state, { 
        songs: payload
    });
}

function removeSongs(state: SongState, payload) {
    return Object.assign({}, state, { 
        songs: state.songs.filter(a => a._id !== payload)
    });
}

function likeSongs(state: SongState, payload) {
    return changeSongStatus(state, payload, 'likes');
}

function listenSongs(state: SongState, payload) {
    return changeSongStatus(state, payload, 'listened');
}

function changeSongStatus(state: SongState, payload, type: string) {
    const songs = state.songs.slice();
    const indexOfSong = songs.findIndex(a => a._id === payload);
    const currentSong = songs[indexOfSong];
    songs[indexOfSong] = Object.assign({}, currentSong, { [type]: currentSong[type] + 1 });

    return Object.assign({}, state, { songs });
}

export function songReducer(
    state: SongState = initialState,
    action: SongAction.Type
) {
    switch (action.type) {
        case SongAction.GET_ALL_SONGS:
            return setAllSongs(state, action.payload);
        case SongAction.REMOVE_SONGS:
            return removeSongs(state, action.payload);
        case SongAction.LIKE_SONGS:
            return likeSongs(state, action.payload);
        case SongAction.LISTEN_SONGS:
            return listenSongs(state, action.payload);
        default:
            return state;
    }
}
