import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-app-13e2b.firebaseio.com/'
});

export default instance;