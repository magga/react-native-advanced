import axios from 'axios';
import { Location } from 'expo';
import qs from 'qs';

import {
    FETCH_JOBS
} from './types';

// 12-08
// To make an axios get request, we need a URL to the Indeed Jobs API
// Save it to the variable
const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
    publisher: '4201738803816157',
    format: 'json',
    v: '2',
    latlong: '1',
    radius: '25',
    co: 'ID'
};

// 12-08
// Make a helper method to build a url + params to make a get request
// The params will be added with a location from the user pick
const buildJobsUrl = (loc) => {
    // 12-08
    // The Indeed Jobs API require a location by it's zip code or city name
    // Because we want to search a job in Indonesia, we can't use the zip code
    //   as it only available for US' zip code
    // Instead we use the city name and the region (province) that were returned 
    //   by the Location's reverseGeocoeAsync method
    const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: `${loc.city}, ${loc.region}` });
    return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region) => {
    return async (dispatch) => {
        try {
            const loc = (await Location.reverseGeocodeAsync(region))[0];
            // 12-08
            // get the complete url by calling the helper method
            const url = buildJobsUrl(loc);
            // 12-08
            // Fetch the list of job by using axios module and save it to the variable
            // Because the list stored on the result.data object, we can just destructure it
            //   to get the data
            const { data } = await axios.get(url);
            // 12-08
            // Save the data to the state by dispatch it with action type FETCH_JOBS
            dispatch({ type: FETCH_JOBS, payload: data });
            // 12-08
            // For now let's see the data by console log it as we don't have any reducer that
            //   will take care of the FETCH_JOBS type yet
            console.log(data);
        } catch (error) {
            console.log(error);   
        }
    };
};
