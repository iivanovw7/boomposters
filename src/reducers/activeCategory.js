import { CATEGORY_SELECTED } from '../Constants/ActionTypes'

let initialState = {
    "id": 1,
    "title": "Комиксы",
    "image_pref": "comix",
    "image_post": ".png",
    "name": "comics",
    "description": ""
};

export default function (state = initialState, action) {
    switch(action.type) {

        case CATEGORY_SELECTED:
            return action.payload;

    }

    return state;
}