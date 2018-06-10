import { ADD_TO_CART, REMOVE_FROM_CART, CLEAN_CART } from '../Constants/ActionTypes'


import initialState from './initialState';




export default function cart(state = initialState.cart, action) {
    switch (action.type) {
        case ADD_TO_CART:
            //If 'ADD' from 'cartActions.js', spread the previous state, and
            //add the new item. This will result in a new array with an added item
            return [...state, action.item];
        case REMOVE_FROM_CART:
            //If 'REMOVE' from 'cartActions.js', return a new array without the
            //item with the ID we clicked on. filter returns a new array, don't
            //have to spread here
            return state.filter( i => i.id !== action.item.id);
        case CLEAN_CART:
            return [];
        default:
            return state;
    }
};





