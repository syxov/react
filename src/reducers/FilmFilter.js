import * as types from '../action/ActionTypes';

const initialState = {
    name: '',
};

export default function MovieFilter(state = initialState, action) {
    switch (action.type) {

        case types.FILTER_MOVIES:
            return Object.assign({}, state, {
                name: action.name
            });

        default:
            return state;
    }
}