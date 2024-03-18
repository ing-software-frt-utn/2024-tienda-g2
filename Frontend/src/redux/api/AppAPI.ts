import axios from 'axios';

export const AppAPI = (_token?: string) => {
    return axios.create({
        // baseURL: 'http://localhost:4000/api',
        baseURL: 'http://tiendita.somee.com/api',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
            'Access-Control-Allow-Origin': '*',
            // 'x-token': token,
        },
    });
};
