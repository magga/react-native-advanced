// 12-11
// Make a reducer to take the job's action creator and save it's
//   payload to the state
import {
    FETCH_JOBS
} from './../actions/types';

// 12-11
// Remember that the response object from the Indeed Jobs API is an object
//   that have a "results" property that contains all the jobs that we want to show
// So for initial state, we will create a new object with the "results" property
//   as an empty array to avoid any error (especially the "undefined" error)
const INITIAL_STATE = {
    results: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_JOBS:
            // 12-11
            // Just return the payload
            // We don't need to copy the state as we just have one single object here
            return action.payload;
        default:
            return state;
    }
};
