import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.common['Accept'] = 'application/json';

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.token;
        if (
            token
            && (config.url !== import.meta.env.VITE_API_URL + 'login')
            && (config.url !== import.meta.env.VITE_API_URL + 'signup')
        ) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
)

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            const toastMessage = "You should login in order to see the page!";
            const state = {
                message: 'Session expired, please log in again',
                toastMessage: toastMessage
            };

            window.history.pushState(state, '', '/signin');
            window.location.reload();
            localStorage.clear();
        } else {
            console.error(error);
        }
        return Promise.reject(error);
    }
)

export const apiRequest = axios;