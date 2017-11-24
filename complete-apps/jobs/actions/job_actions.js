import axios from 'axios';
import { Location } from 'expo';

import {
    FETCH_JOBS
} from './types';

export const fetchJobs = (region) => {
    const { latitude, longitude } = region;

    return async (dispatch) => {
        // console.log(region);
        Location.reverseGeocodeAsync(region)
            .then((data) => {
                console.log(data);
            });
    };
};
