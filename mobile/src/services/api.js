import axios from 'axios';

const api = axios.create({
    /* run ipconfig */
    baseURL: 'http://192.168.0.10:3333'
});

export default api;