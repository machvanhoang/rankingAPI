import axios from 'axios';
import Cookies from 'js-cookie';
const authAxios = axios.create({
    baseURL: process.env.REACT_APP_ENDPOINT
});
authAxios.interceptors.request.use(
    (config) => {
        const token = Cookies.get('tokenAdmin');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
const clientAxios = axios.create({
    baseURL: process.env.REACT_APP_ENDPOINT
});
export { authAxios, clientAxios }
