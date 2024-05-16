import axios from 'axios'
const fetch = axios.create({
    baseURL: `https://966e-41-85-178-166.ngrok-free.app/api/`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});

export default fetch