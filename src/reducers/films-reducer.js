import * as types from '../action/actions';

export function FilmsReducer(state = [], action) {
    switch (action.type) {
        case types.DOWNLOAD_FILMS_SUCCESS:
            return action.films;
        default:
            return state;
    }
}