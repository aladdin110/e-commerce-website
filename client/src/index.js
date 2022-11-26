import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
import { Provider } from "react-redux";
import { authUser } from './redux/actions/AuthActions';
import { fetchProducts } from "./redux/actions/productActions";
import rootReducer from "./redux/reducers/rootReducer";
//import products from "./redux/products.json";
import "./assets/styles/style.scss";
import { composeWithDevTools } from '@redux-devtools/extension';
// As of React 18

const root = ReactDOM.createRoot(document.getElementById('root'))
export const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(thunk, save()))
);



root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
