import axios from "axios";
import { baseURL, endPoints } from "../common/endpoints";

const httpClient = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});


httpClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("authToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

httpClient.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error("Unauthorized access. Redirecting to login...");
        }
        return Promise.reject(error);
    }
);

export const getData = (url, config = {}) => {
    return httpClient.get(url, config);
}

export const postData = (url, data = {}, config = {}) => {
    return httpClient.post(url, data, config);
};

export const putData = (url, data = {}, config = {}) => {
    return httpClient.put(url, data, config);
};

export const deleteData = (url, config = {}) => {
    return httpClient.delete(url, config);
};

export default httpClient;
