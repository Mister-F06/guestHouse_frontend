import axios from 'axios'
const fetch = axios.create({
    baseURL: `https://3ce7-137-255-17-139.ngrok-free.app/api/`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});

export default fetch