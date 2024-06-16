import axios from 'axios'
const fetch = axios.create({
    baseURL: `https://dc0c-137-255-45-224.ngrok-free.app/api/`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});

export default fetch