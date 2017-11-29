import _ from 'lodash';
import { REHYDRATE } from 'redux-persist';

import {
    LIKE_JOB,
    CLEAR_LIKED_JOBS
} from './../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // 15-04
        // Everytime Redux Persist get the "warmup action" from Redux, it'll read
        //   data from storage and dispatch it with the action type "REHYDRATE"
        // So here we can catch that action with case REHYDRATE
        // It'll dispatch and action with payload of all the state that we
        //   previously saved
        // In this case we only saved the "likedJobs" state so we can get it from the payload
        // Remember that there's a case when it's the first time the user run the app, so 
        //   they haven't liked any jobs
        // We can add a condition when the user haven't liked any jobs, we declare it as
        //   an empty array (INITIAL_STATE)
        case REHYDRATE:
            return action.payload.likedJobs || INITIAL_STATE;
        case LIKE_JOB:
            return _.uniqBy([
                action.payload, ...state
            ], 'jobkey');
        case CLEAR_LIKED_JOBS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
