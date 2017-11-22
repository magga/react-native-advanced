import { AsyncStorage } from 'react-native';
import {
    FB_LOGIN_SUCCESS
} from './types';

// How to use AsyncStorage :
//   AsyncStorage.setItem('fb_token', token);
//   AsyncStorage.getItem('fb_token');

export const facebookLogin = () => {
    // 11-04
    // Now we make an asynchronous Action Creator to check whether there
    //   is a token inside our Async Storage
    // We use an ES7 Async-Await syntax here instead of using Promise
    // It'll take a less code than by using Promise
    // Because the AsyncStorage method is asynchronous, instead of returning
    //   an Action, we'll returning a function
    // This function will be handled by Redux Thunk to be dispatched manually later
    return async (dispatch) => {
        let token = await AsyncStorage.getItem('fb_token');

        if (token) {
            // Dispatch an action saying FB login is done
        } else {
            // Start up FB login process
        }
    };
};
