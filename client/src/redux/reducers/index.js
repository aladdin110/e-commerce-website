import { combineReducers} from "redux";
import ProductReducer from "./productReducer"

const reducers=combineReducers({ 
    Product:ProductReducer,
})
export default  reducers