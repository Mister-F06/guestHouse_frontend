import axios from 'axios'
const fetch = axios.create({
    baseURL: `https://652a-41-85-179-228.ngrok-free.app/api/`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});

export default fetch