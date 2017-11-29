import { combineReducers } from 'redux';

import auth from './auth_reducer';
import jobs from './jobs_reducer';
// 13-10
// Import the like reducer
import likedJobs from './like_reducer';

export default combineReducers({
    // 12-11
    // Add likedJons to the combineReducer
    auth, jobs, likedJobs
});
