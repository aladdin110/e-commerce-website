import axios from 'axios';
import { store } from '..';
import { authUser } from '../redux/actions/AuthActions';
const url = 'http://localhost:8080/product/getProducts';
const authHandlerUrl = 'http://localhost:8080/authenticate/';
const registerHandlerUrl = 'http://localhost:8080/user/createUser';

export const fetchProduct = async () => await axios.get(url);
export const authRequest = async (formData) => {
    await axios.post(authHandlerUrl, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
       store.dispatch(authUser(res.data));
       alert(res.data)
})
}
export const registerRequest = async (formData) => {
  await axios.post(registerHandlerUrl, formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
     console.log(res.data);
})
}