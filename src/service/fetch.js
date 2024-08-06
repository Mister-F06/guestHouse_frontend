import axios from 'axios'
const fetch = axios.create({
    baseURL: `https://1486-137-255-23-164.ngrok-free.app/api/`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});

export default fetch
