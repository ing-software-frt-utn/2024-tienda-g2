import axios from 'axios';

export const authApi = axios.create({
    // baseURL: 'http://localhost:4000/api/auth',
    baseURL: 'http://localhost:4000/api/auth',
});

export const AuthValidationAPI = (token: string) => {
    return axios.create({
        baseURL: 'http://localhost:4000/api/auth',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
            'x-token': token,
        },
    });
};
