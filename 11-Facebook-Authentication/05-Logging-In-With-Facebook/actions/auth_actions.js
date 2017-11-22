import { AsyncStorage } from 'react-native';
// 11-05
// Import Facebook object from expo module to help us do a 
//   facebook login
import { Facebook } from 'expo';

import {
    FB_LOGIN_SUCCESS,
    // 11-05
    // Import FB_LOGIN_FAIL types
    FB_LOGIN_FAIL
} from './types';
import facebookId from './../secrets/facebook_id';

// How to use AsyncStorage :
//   AsyncStorage.setItem('fb_token', token);
//   AsyncStorage.getItem('fb_token');

export const facebookLogin = () => {
    return async (dispatch) => {
        let token = await AsyncStorage.getItem('fb_token');

        if (token) {
            // Dispatch an action saying FB login is done
            // 11-05
            // The AsyncStorage is just a method to save and load data from user's device
            // We don't want our app (component) to read the toke manually from AsyncStorage
            //   whenever they need
            // We want them to read the token from our reducers
            // So if we read that the token is available in the AsyncStorage, we dispatch
            //   an action to save that token to our reducer
            dispatch({ type: FB_LOGIN_SUCCESS, payload: token });
        } else {
            // Start up FB login process
            // 11-05
            // We create a helper function to help us write the facebook login's code
            //   instead of writing that code inside this else statement
            doFacebookLogin(dispatch);
        }
    };
};

// 11-05
// This helper function will help us to log in into facebook, get the token, and save
//   that token into the AsyncStorage
// So there will be some code that'll be asynchronous
// As we learned before, if we want to write an asynchronous code inside a function,
//   we have to declare that function as "async"
const doFacebookLogin = async (dispatch) => {
    // 11-05
    // The "result" variable here will hold the return value from the facebook login's
    //   process, including the token that we need
    // The "logInWithReadPermissionsAsync" function takes 2 parameters, the first
    //   is the facebook app id that we get from the previous section, and the second
    //   is the options object that contains some configuration

    // This code will pop up a modal screen inside of our app 
    // The modal screen is a part of Facebook's API that will do all the dirty job
    //   to signed in the user to facebook for us
    let result = await Facebook.logInWithReadPermissionsAsync(facebookId, {
        // 11-05
        // When we do a facebook authentication, we can ask permission of what part 
        //   of the user's facebook that we want to be given access to
        // In this case, we only want to read the user's public profile
        permissions: ['public_profile']
    });

    // 11-05
    // The "result" object will contains 2 property, that is the "type" and "token"
    // The "type" reflect the status of what happened to the user when they try to 
    //   log in in the facebook's modal screen
    const { type, token } = result;

    // 11-05
    // If we can't get the token, or it means that the user cancel the process or 
    //   enter the wrong credential, the type property will be a string "cancel"
    if (type === 'cancel') {
        // 11-05
        // If the user cancel the login process, we'll return early and dispatch
        //   an action with type FAIL
        return dispatch({ type: FB_LOGIN_FAIL });
    }

    // 11-05
    // Now that we got the token, first we have to save it to the AsyncStorage
    //   so that the token won't disappear even when the user close the app
    // And remember that the AsyncStorage is an asynchronous method, we have to
    //   put an "await" syntax in front of it
    // The setItem function is not going to return anything, so we don't have
    //   to put a variable assignment
    await AsyncStorage.setItem('fb_token', token);

    // 11-05
    // Lastly we tell the reducer that we have successfully logged the user in
    //   by dispatching an action and save the token to the reducer
    dispatch({ type: FB_LOGIN_SUCCESS, payload: token });
};
