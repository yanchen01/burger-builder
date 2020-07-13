import axios from 'axios';

const instance = axios.create({ baseURL: 'https://react-burger-builder-a9f6c.firebaseio.com/' });

export default instance;
