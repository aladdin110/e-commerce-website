import { SET_CURRENCY } from "../actions/currencyActions";

const initState = {
  currencySymbol: "$",
  currencyName: "USD",
  currencyRate: 1
};

const currencyReducer = (state = initState, action) => {
  if (action.type === SET_CURRENCY) {
    const currencyName = action.payload.currencyName;

    if (currencyName === "USD") {
      return {
        ...state,
        currencySymbol: "$",
        currencyRate: 1,
        currencyName
      };
    }
    if (currencyName === "EUR") {
      return {
        ...state,
        currencySymbol: "€",
        currencyRate: 1,
        currencyName
      };
    }
    if (currencyName === "GBP") {
      return {
        ...state,
        currencySymbol: "£",
        currencyRate: 1,
        currencyName
      };
    }
  }

  return state;
};

export default currencyReducer;
