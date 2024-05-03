import axios from 'axios'
const fetch = axios.create({
    baseURL: `https://6995-137-255-21-248.ngrok-free.app/api/`,
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});

export default fetch