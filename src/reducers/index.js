import { combineReducers } from 'redux';
import Categories from './reducer_categories.js';
import Vintage from './reducer_vintage';
import ActiveCategory from './activeCategory.js';


const rootReducer = combineReducers({


    categories: Categories,
    vintage: Vintage,
    activeCategory: ActiveCategory,

});

export default rootReducer;
