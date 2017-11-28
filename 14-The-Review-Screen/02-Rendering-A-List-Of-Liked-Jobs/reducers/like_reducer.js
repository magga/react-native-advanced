// 13-10
// The likejob save the job that the user liked currently into an array of jobs
//   that the user have liked before

// But the problem is the user can like the same job more than one time
// A good solution is not to save the job if that job have been liked before
// To do that, we can use a help from a module called "lodash"
// To use lodash, first install it from npm
//   --> npm install --save lodash
import _ from 'lodash';

import {
    LIKE_JOB
} from './../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LIKE_JOB:
            // 13-10
            // This line of code means:
            // Take all the liked job and add the currently liked job, then combine it
            //   into a new array
            // Then do a checking and filter out all of the job in that array that have
            //   a same jobkey's value
            // If that jobkey's value have more than one duplicate, take only one and
            //   toss out all that remains
            return _.uniqBy([
                action.payload, ...state
            ], 'jobkey');            
        default:
            return state;
    }
};
