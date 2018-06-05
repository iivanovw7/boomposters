import * as types from '../Constants/ActionTypes'

export function selectCategory(category) {
    return {
        type: types.CATEGORY_SELECTED,
        payload: category
    }
}

export function pageSelector(page) {
    return {
        type: types.PAGE_SELECTED,
        payload: page
    }
}

export const addToCart = item => ({
    type: types.ADD_TO_CART,
    item: item
});

export const removeFromCart = item => ({
    type: types.REMOVE_FROM_CART,
    item: item
});

export function displayCart(tag) {
    return {
        type: types.SHOW_CART,
        payload: tag
    }
}


