import { combineReducers } from 'redux';
import Categories from './reducer_categories.js';
import ActiveCategory from './activeCategory.js';
import cart from './cart'


import PageSelected from './pageSelected.js';
import AllPosters from './posters';
import CartDisplay from  './showCart.js';


const rootReducer = combineReducers({


    categories: Categories,
    activeCategory: ActiveCategory,
    activePage: PageSelected,
    allPosters: AllPosters,
    cart,
    showCart: CartDisplay,

});


export default rootReducer;
