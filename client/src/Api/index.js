import axios from 'axios';
const url = 'http://localhost:8080/product/getProducts';

export const fetchProduct = () => axios.get(url);