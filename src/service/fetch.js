import axios from 'axios'
const fetch = axios.create({
    baseURL: `https://514a-137-255-34-168.ngrok-free.app/api/`,
    // baseURL: `http://127.0.0.1:8000/api/`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});

export default fetch