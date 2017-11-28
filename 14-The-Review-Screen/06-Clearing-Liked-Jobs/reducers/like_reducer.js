import _ from 'lodash';

import {
    LIKE_JOB,
    // 14-06
    // Import the CLEAR_LIKED_JOBS types
    CLEAR_LIKED_JOBS
} from './../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LIKE_JOB:
            return _.uniqBy([
                action.payload, ...state
            ], 'jobkey');     
        // 14-06
        // Clear all the liked job's array by turn it back into the initial state
        case CLEAR_LIKED_JOBS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
