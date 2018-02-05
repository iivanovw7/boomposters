import { combineReducers } from 'redux';
import Categories from './reducer_categories.js';


const rootReducer = combineReducers({


    categories: Categories,

});

export default rootReducer;
