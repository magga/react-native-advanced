import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// 15-03
// Import persistStore and autoRehydrate from redux-persist to be wired in our store
import { persistStore, autoRehydrate } from 'redux-persist';
// 15-03
// Import the AsyncStorage
import { AsyncStorage } from 'react-native';

import reducers from './../reducers';

const store = createStore(
    reducers, 
    {}, 
    compose(
        applyMiddleware(thunk),
        // 15-03
        autoRehydrate()
    )
);

// 15-03
persistStore(store, { storage: AsyncStorage, whitelist: ['likedJobs'] });

export default store;
