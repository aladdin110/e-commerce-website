import currencyReducer from "./currencyReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import compareReducer from "./compareReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import { createMultilanguageReducer } from "redux-multilanguage";

const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" }),
  authUser: authReducer,
  currencyData: currencyReducer,
  productData: productReducer,
  cartData: cartReducer,
  wishlistData: wishlistReducer,
  compareData: compareReducer
});

export default rootReducer;
