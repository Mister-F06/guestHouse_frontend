import axios from 'axios'
const fetch = axios.create({
    baseURL: `https://1e3f-137-255-39-39.ngrok-free.app/api/`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});

export default fetch