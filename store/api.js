import axios from "axios";

const axiosi = axios.create({
    baseURL: 'http://192.168.1.65:3000/api',
    timeout: 5000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

export default axiosi;