import axios from 'axios'
import { baseURL } from '../common'

const axiosClient = axios.create({
    baseURL : `${baseURL}`,
    headers: {
        'Content-Type': 'application/json',

    }
})
axiosClient.interceptors.request.use(
    config => {
        return config
    },
    error => {
        Promise.reject(error)
    }
)
axiosClient.interceptors.response.use(
    response => response.data,
    error => {
        console.error('Network Error:', error.message); 
        return Promise.reject(error);
    }
)

export default axiosClient;
