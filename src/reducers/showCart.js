import { SHOW_CART } from '../Constants/ActionTypes'

let initialState = true;

export default function (state = initialState, action) {
    switch(action.type) {

        case SHOW_CART:
            return action.payload;

    }

    return state;
}