import axios from "axios";

const instance = axios.create({
    baseURL: '...' // Here goes the API (cloud function) URL
});

export default instance