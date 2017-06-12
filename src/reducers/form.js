import * as types from '../actions/types';

export default function formReducer(state = {}, action) {
    switch(action.type) {
        case types.IS_VALID_LAST_NAME:
            return Object.assign({}, state, action.errors)
        case types.IS_VALID_EMAIL:
            return Object.assign({}, state, action.errors)
        default:
            return state;
    }
}