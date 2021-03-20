import * as ActionTypes from './ActionTypes';


const defaultState = { };

export const products = (state={ },action) => {
    console.log('event recived');
    switch (action.type) {
        case ActionTypes.FETCH_SUCCESS:
            return action.payload;  
        default:
            return state;
        }
    }