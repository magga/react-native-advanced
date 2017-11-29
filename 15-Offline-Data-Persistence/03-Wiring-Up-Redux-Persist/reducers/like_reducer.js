import _ from 'lodash';
// 15-03
import { REHYDRATE } from 'redux-persist';

import {
    LIKE_JOB,
    CLEAR_LIKED_JOBS
} from './../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // 15-03
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
