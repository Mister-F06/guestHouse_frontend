import axios from 'axios'
const fetch = axios.create({
    baseURL: `https://6d49-41-85-177-61.ngrok-free.app/api/`,
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});

export default fetch