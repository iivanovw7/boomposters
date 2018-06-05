import { PAGE_SELECTED } from '../Constants/ActionTypes'

let initialState = 'MainPage';

export default function (state = initialState, action) {
    switch(action.type) {

        case PAGE_SELECTED:
            return action.payload;

    }

    return state;
}