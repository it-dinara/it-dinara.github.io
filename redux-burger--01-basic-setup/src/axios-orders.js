import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-di.firebaseio.com/'
});

export default instance;