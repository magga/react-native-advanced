// 12-06
// Create an action creator to take care of the map's jobs searching

// 12-06
// Install and import the axios module from npm to help us fetch the job's API
import axios from 'axios';

// 12-06
// Import the type to help us maintaining the action type
import {
    FETCH_JOBS
} from './types';

// 12-06
// Create a fetchJobs action creator to fetch all the jobs within a location
//   from the Indeed Jobs API
// Because it'll access the API from internet, it'll be an asynchronous method
export const fetchJobs = () => {
    return async (dispatch) => {

    };
};
