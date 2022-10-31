import config from 'config';
import { authHeader } from '../_helpers';
import axios from "axios";

export const stockService = {
    getById
};

function getById(id,startdate,enddate) {    
    console.log(startdate);
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

  return axios.get(`${config.apiUrl}/api/Stock/${id}/${startdate}/${enddate}`, requestOptions).then(res => res.data);     
}