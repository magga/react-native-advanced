// 11-02
// Create a dummy reducer to set up some code
import { combineReducers } from 'redux';

export default combineReducers({
    auth: (state, action) => { console.log(action); return []; }
});
