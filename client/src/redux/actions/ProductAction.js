/* import { FETCH_ALL_Product, CREATE_Product, UPDATE_Product, DELETE_Product, LIKE_Product } from './actionTypes';

import * as api from '../../Api/index';

export const getPosts = () => async (dispatch) => {
    try {
      const  data  = await api.fetchProduct();
  console.log(data.data)
      dispatch({ type: FETCH_ALL_Product, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  }; */