import axios from 'axios';
import { store } from '..';
import { authUser, logoutUser } from '../redux/actions/AuthActions';
import { fetchProducts } from '../redux/actions/productActions';
const productsUrl = 'http://localhost:8080/product/getProducts';
const authHandlerUrl = 'http://localhost:8080/authenticate/';
const registerHandlerUrl = 'http://localhost:8080/user/createUser';
const addProductUrl = 'http://localhost:8080/product/createProduct';

//get all products
export const getProducts = async () => await axios.get(productsUrl).then(res => {
  store.dispatch(fetchProducts(res.data))
});

//create product request
export const createProduct = async (formData) => {
  const addRes = await axios.post(addProductUrl, formData, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log(addRes.data);
}


//authenticate user
export const authRequest = async (formData) => {
  const authRes = await axios.post(authHandlerUrl, formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  store.dispatch(authUser(authRes.data));
  return authRes.data;
}

//logout user (unlike auth request, logout doesnt make a call to backend api)
export const logoutRequest = () => {
  store.dispatch(logoutUser());
}

//create user (register)
export const registerRequest = async (formData) => {
  await axios.post(registerHandlerUrl, formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
     console.log(res.data);
})
}