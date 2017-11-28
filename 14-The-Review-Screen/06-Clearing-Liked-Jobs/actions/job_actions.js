import axios from 'axios';
import { Location } from 'expo';
import qs from 'qs';

import {
    FETCH_JOBS,
    LIKE_JOB,
    // 14-06
    // Import the CLEAR_LIKED_JOBS types
    CLEAR_LIKED_JOBS
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

export const fetchJobs = (region, keyword, callback) => {
    return async (dispatch) => {
        try {
            const loc = (await Location.reverseGeocodeAsync(region))[0];
            const url = buildJobsUrl(loc, keyword);
            const { data } = await axios.get(url);
            dispatch({ type: FETCH_JOBS, payload: data });
            callback();
        } catch (error) {
            console.log(error);   
        }
    };
};

export const likeJob = (job) => {
    return {
        type: LIKE_JOB,
        payload: job
    };
};

// 14-06
// Create an action creator that will clear all the likedJobs inside the reducer
export const clearLikedJobs = () => {
    return {
        type: CLEAR_LIKED_JOBS
    };
};
