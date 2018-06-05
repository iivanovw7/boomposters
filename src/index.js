import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import MainPage from './components/MainPage.js';
import Store from './store';




const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = Store();
const mountPoint = document.querySelector('.container');


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={MainPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , mountPoint);


/*

<Route path="/posts/new" component={PostsNew}/>

 */

/*

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={MainPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , mountPoint);


 */