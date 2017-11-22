// 11-03
// We make the first actions here, that is to handle the facebook login
// The first action will be expected to do some checking if whether the 
//   user have been logged in before
// To do that, we'll do some checking to the AsyncStorage

import { AsyncStorage } from 'react-native';
import {
    FB_LOGIN_SUCCESS
} from './types';

// How to use AsyncStorage :
//   AsyncStorage.setItem('fb_token', token);
//   AsyncStorage.getItem('fb_token');

export const facebookLogin = () => {

};
