import { MovieState } from "../states/movie.state";
import * as MovieAction from '../actions/movie.action';

const initialState: MovieState = {
    allMovies: [],
    myMovies: [],
    movieDetails: null
};

function setAllMovies(state: MovieState, payload) {
    return Object.assign({}, state, { 
        allMovies: payload
    });
}

function setMyMovies(state: MovieState, payload) {
    return Object.assign({}, state, { 
        myMovies: payload
    });
}

function setMovieDetails(state: MovieState, payload) {
    return Object.assign({}, state, { 
        movieDetails: payload
    });
}

function buyTicket(state: MovieState, movieId) {
    let newState = Object.assign({}, state);
    if (newState.movieDetails && newState.movieDetails._id === movieId) {
        let currentMovie = newState.movieDetails;
        newState.movieDetails = Object.assign({}, currentMovie, { tickets: currentMovie.tickets - 1 });
    }

    const myMovies = newState.myMovies;
    const myMovieIndex = myMovies.findIndex(a => a._id === movieId);
    if (myMovieIndex !== -1) {
        let myCurrentMovie = myMovies[myMovieIndex];
        myMovies[myMovieIndex] = Object.assign({}, myCurrentMovie, { tickets: myCurrentMovie.tickets - 1 } );
    }

    const allMovies = newState.allMovies;
    const allMovieIndex = allMovies.findIndex(a => a._id === movieId);
    if (allMovieIndex !== -1) {
        let allCurrentMovie = allMovies[allMovieIndex];
        allMovies[allMovieIndex] = Object.assign({}, allCurrentMovie, { tickets: allCurrentMovie.tickets - 1 } );
    }

    return newState;
}

export function movieReducer(
    state: MovieState = initialState,
    action: MovieAction.Type
) {
    switch (action.type) {
        case MovieAction.GET_ALL_MOVIES:
            return setAllMovies(state, action.payload);
        case MovieAction.GET_MY_MOVIES:
            return setMyMovies(state, action.payload);
        case MovieAction.GET_MOVIE_DETAILS:
            return setMovieDetails(state, action.payload);
        case MovieAction.BUY_TICKET:
            return buyTicket(state, action.payload);
        default:
            return state;
    }
}
