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

const buildJobsUrl = (loc, keyword) => {
    const region = loc.region === 'Daerah Khusus Ibukota Jakarta' ? 'Jakarta' : loc.region;
    const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: `${loc.city}, ${region}`, q: keyword });
    return `${JOB_ROOT_URL}${query}`;
};

// 12-12
// Modify the fetchJobs method to receive the callback function
export const fetchJobs = (region, keyword, callback) => {
    return async (dispatch) => {
        try {
            const loc = (await Location.reverseGeocodeAsync(region))[0];
            const url = buildJobsUrl(loc, keyword);
            const { data } = await axios.get(url);
            dispatch({ type: FETCH_JOBS, payload: data });
            // Call the callback function only if the get location and fetch Jobs API are success
            callback();
        } catch (error) {
            console.log(error);   
        }
    };
};
