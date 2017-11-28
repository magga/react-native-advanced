import axios from 'axios';
// 12-07
// The Indeed Jobs API need a zip code or city name and region on their 
//   API's parameter to search a jobs on a certain location
// Our region object is only hold a latitude and longitude
// We need a tool to convert the latitude and longitude to zip code, city name,
//   or region name
// We can use a help from Location object from expo module
import { Location } from 'expo';

// 12-07
// The Indeed Jobs API need some parameter to get the job done, for example
//   --> http://api.indeed.com/ads/apisearch?publisher=4201738803816157&format=json&l=Jakarta&v=2&co=ID
// There's some parameter needed there, like publisher, format, l, v, co, etc
// We can hardcode the string there, but it will take some effort to do that
// Instead we can use a helper module called qs (query string)
// Install it first by using npm, and visit the documentation on
//   --> https://www.npmjs.com/package/qs
import qs from 'qs';

import {
    FETCH_JOBS
} from './types';

// 12-07
// To form a string of parameters using qs module, we can define the parameters first by using
//   creating an object that contains the parameter itself
const JOB_QUERY_PARAMS = {
    publisher: '4201738803816157',
    format: 'json',
    v: '2',
    latlong: '1',
    radius: '25',
    co: 'ID'
};

export const fetchJobs = (region) => {
    return async (dispatch) => {
        // 12-07
        // We use the reverseGeocodeAsync method to get the data required by 
        //   Indeed Jobs API
        // Wrap it inside the try-catch block in case the method failed
        try {
            const loc = await Location.reverseGeocodeAsync(region)[0];    
        } catch (error) {
            console.log(error);   
        }
    };
};
