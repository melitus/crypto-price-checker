import axios from "axios";
import * as urls from "./apiPath";

/**
 * API call that will be made to get the information we need from the API endpoint
 * Returns a promise that should be resolved or rejected by action creators
 * @returns {Object}
 * */
export function getCoinDataApiCall(){
    return axios.get(`${urls.API_URL}/v2/ticker/`)
}