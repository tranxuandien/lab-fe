import { useAuthStore } from '@/stores/auth';
import axios from 'axios';
import { toast } from 'vue3-toastify';

export const axiosWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

const fetch = axios.create({
    timeout: 10000,
});

function request(method) {
    return async (url, data) => {
        const requestOptions = {
            method,
            headers: authHeader(url)
        };

        if (data) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.data = JSON.stringify(data);
        }
        console.log(requestOptions);
        return await fetch(url, requestOptions).then(handleResponse).catch(handleResponseError);
    }
}

// helper functions

function authHeader(url) {
    // return auth header with jwt if user is logged in and request is to the api url
    const { user } = useAuthStore();
    const isLoggedIn = !!user?.data.token;
    const isApiUrl = url.includes('/api/v');
    console.log("check header" + isApiUrl + isLoggedIn)
    if (isLoggedIn && isApiUrl) {
        return { Authorization: `Bearer ${user.data.token}` };
    } else {
        return {};
    }
}

async function handleResponse(response) {
    const isJson = response.headers?.get('content-type')?.includes('application/json');
    const data = isJson ? response.data : null;
    if (data.message) {
        toast.success(data.message, {
            position: toast.POSITION.TOP_CENTER,
        });
    }
    return data;
}

function handleResponseError(error) {
    console.log(error.response.data.errorMessage)
    toast.error(error.response.data.errorMessage, {
        position: toast.POSITION.TOP_CENTER,
    });
    // const { user, logout } = useAuthStore();
    // console.log(user)
    // if ([401, 403].includes(error.status) && user) {
    // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
    //logout();
    // }

    // get error message from body or default to response status
    // const error = (data && data.message) || res.status;
    // return Promise.reject(error);
}