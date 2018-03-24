import { combineReducers } from 'redux';
import Categories from './reducer_categories.js';
import ActiveCategory from './activeCategory.js';
import PageSelected from './activeCategory.js';
import AllPosters from './posters';


const rootReducer = combineReducers({


    categories: Categories,
    activeCategory: ActiveCategory,
    activePage: PageSelected,
    allPosters: AllPosters

});

export default rootReducer;
