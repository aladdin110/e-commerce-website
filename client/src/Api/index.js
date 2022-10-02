import axios from 'axios';
const url = 'http://localhost:8080/product';

export const fetchProduct = () => axios.get(url);