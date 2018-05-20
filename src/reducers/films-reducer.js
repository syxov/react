import * as types from '../action/actions';

const initialState = [];

export function FilmsReducer(state = initialState, action) {
    switch (action.type) {
        case types.DOWNLOAD_FILMS_SUCCESS:
            return action.films;
        default:
            return state;
    }
}