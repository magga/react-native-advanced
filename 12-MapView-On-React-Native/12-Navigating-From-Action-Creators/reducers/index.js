import { combineReducers } from 'redux';

import auth from './auth_reducer';
// 12-11
// Import the jobs reducer
import jobs from './jobs_reducer';

export default combineReducers({
    // 12-11
    // Add jobs to the combineReducer
    auth, jobs
});
