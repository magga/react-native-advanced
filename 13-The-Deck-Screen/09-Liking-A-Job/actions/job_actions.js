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
    // 13-07
    // There's a gotcha on the new Location reverseGeocodeAsync from the expo module
    // When we searched a region in the Jakarta province, it'll return 'Daerah Khusus Ibukota Jakarta'
    // The Indeed Jobs API won't recognize it
    // It can only read 'Jakarta' as region
    // So for now we'll do a harcode solution to convert 'Daerah Khusus Ibukota Jakarta' to 'Jakarta'
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
