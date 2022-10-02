import { applyMiddleware, compose, configureStore,createStore } from '@reduxjs/toolkit'
import reducers from './reducers/index'
import thunk from 'redux-thunk';

export default createStore(reducers, compose (applyMiddleware (thunk)));