import axios from 'axios';
import { Location } from 'expo';
import qs from 'qs';

import {
    FETCH_JOBS
} from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
    publisher: '4201738803816157',
    format: 'json',
    v: '2',
    latlong: '1',
    radius: '25',
    co: 'ID'
};

// 12-10
// Modify the helper method
const buildJobsUrl = (loc, keyword) => {
    // 12-10
    // Add the keyword as a params with the type "q"
    const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: `${loc.city}, ${loc.region}`, q: keyword });
    return `${JOB_ROOT_URL}${query}`;
};

// 12-10
// Modify the action creator so it takes the keyword
export const fetchJobs = (region, keyword) => {
    return async (dispatch) => {
        try {
            const loc = (await Location.reverseGeocodeAsync(region))[0];
            // 12-10
            // Pass the keyword so it will be added in the params
            const url = buildJobsUrl(loc, keyword);
            const { data } = await axios.get(url);
            dispatch({ type: FETCH_JOBS, payload: data });
            console.log(data);
        } catch (error) {
            console.log(error);   
        }
    };
};
