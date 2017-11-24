import { combineReducers } from 'redux';

// 11-08
// Import the auth_reducer to handle the aunthentication process
import auth from './auth_reducer';

export default combineReducers({
    // 11-08
    // Connect the auth reducer to the auth state
    // As the name is the same, we can do a destructuring
    // We don't have to write "auth: auth"
    auth
});
