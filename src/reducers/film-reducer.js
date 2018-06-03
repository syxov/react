import * as types from '../action/actions';

export function FilmReducer(state = {}, action) {
    switch (action.type) {
        case types.DOWNLOAD_FILM_SUCCESS:
            return action.film;
        default:
            return state;
    }
}