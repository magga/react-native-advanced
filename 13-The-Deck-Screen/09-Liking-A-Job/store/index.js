// 11-02
// The store will be a huge mess of code so
//   we create a store in separate file
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// 11-02
// Import a reducer from the reducers folder
// As we just setting up some code, create just a dummy reducers for now
import reducers from './../reducers';

const store = createStore(
    reducers, 
    {}, 
    compose(
        applyMiddleware(thunk)
    )
);

export default store;
