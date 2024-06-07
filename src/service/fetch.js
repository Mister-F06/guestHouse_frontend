import axios from 'axios'
const fetch = axios.create({
    baseURL: `https://ceae-137-255-34-152.ngrok-free.app/api/`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});

export default fetch