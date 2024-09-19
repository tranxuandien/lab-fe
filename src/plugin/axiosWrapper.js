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
    return async (url, data, isDownloadFile) => {
        url = process.env.VUE_APP_BASE_URL + url;
        const requestOptions = {
            method,
            headers: authHeader(url),
        };


        if (data) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.data = JSON.stringify(data);
        }
        console.log(requestOptions);
        if (isDownloadFile) {
            requestOptions.responseType = 'blob'
            return await fetch(url, requestOptions).then((res) => {
                saveFile(res.data);
            }).catch(handleResponseError);
        } else {
            return await fetch(url, requestOptions).then(handleResponse).catch(handleResponseError);
        }
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
    // const isJson = response.headers?.get('content-type')?.includes('application/json');
    const data = response.data;
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

function saveFile(val) {
    console.log(val);
    const url = window.URL.createObjectURL(new Blob([val], { type: "application/pdf" }));
    const tempLink = document.createElement('a');
    tempLink.href = url;
    tempLink.setAttribute('download',
        `chemical_barcode.pdf`);
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    window.URL.revokeObjectURL(url);
}