import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import reducers from './../reducers';

const store = createStore(
    reducers, 
    {}, 
    compose(
        applyMiddleware(thunk),
        // 15-04
        // autoRehydrate is a "Store Enhancer"
        // As the name imply, it'll enhance the capability of the Store
        // autoRehydrate will be responsible for pulling out our data and then send
        //   it off through all of the reducer
        autoRehydrate()
    )
);

// 15-04
// persistStore is what sets up Redux Persist to watch or store for any change in state
// Any time our state changes, reduxPersist will take that new state and send it 
//   into Async Storage (storage: AsyncStorage)
// Our state may have different reducer in it and we may not want to save all of that
// We can "whitelist" all the state that we want to save in AsyncStorage
persistStore(store, { storage: AsyncStorage, whitelist: ['likedJobs'] });

export default store;
