import * as types from '../action/ActionTypes';

const initialState = {
    films: [],
};

export function FilmsReducer(state = initialState, action) {
    switch (action.type) {
        case types.DOWNLOAD_FILMS_SUCCESS:
            console.log(action);
            return action.films;

        default:
            return state;
    }
}