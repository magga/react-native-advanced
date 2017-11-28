// 11-08
// This reducer will handle all of the authentication reducer process

import {
    FB_LOGIN_SUCCESS,
    FB_LOGIN_FAIL
} from './../actions/types';

const INITIAL_STATE = {
    token: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // 11-08
        // When the user successfully logged in, return the token as a state
        case FB_LOGIN_SUCCESS:
            return { ...state, token: action.payload };
        // 11-08
        // We don't really have to handle the facebook login fail actually, as
        //   it won't affect anything inside of our app
        // But in this case we can just, say, clear off the token that we have
        case FB_LOGIN_FAIL:
            return { ...state, token: null };
        default:
            return state;
    }
};
