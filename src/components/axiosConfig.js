import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:7001",
    withCredentials: true
});

export default instance;