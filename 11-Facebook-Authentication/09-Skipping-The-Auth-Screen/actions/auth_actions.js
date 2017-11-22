import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import {
    FB_LOGIN_SUCCESS,
    FB_LOGIN_FAIL
} from './types';
import facebookId from './../secrets/facebook_id';

export const facebookLogin = () => {
    return async (dispatch) => {        
        let token = null;

        try {
            console.log('MASUK');
            // token = await AsyncStorage.getItem('fb_token');
            token = '123';
            console.log(token);
        } catch (error) {
            console.log('MASUK2');
            return;    
        }
        
        if (token) {
            dispatch({ type: FB_LOGIN_SUCCESS, payload: token });
        } else {
            doFacebookLogin(dispatch);
        }
    };
};

const doFacebookLogin = async (dispatch) => {
    let result = await Facebook.logInWithReadPermissionsAsync(facebookId, {
        permissions: ['public_profile']
    });

    const { type, token } = result;

    if (type === 'cancel') {
        return dispatch({ type: FB_LOGIN_FAIL });
    }

    await AsyncStorage.setItem('fb_token', token);
    dispatch({ type: FB_LOGIN_SUCCESS, payload: token });
};
