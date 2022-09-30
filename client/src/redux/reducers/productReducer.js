const ProductReducer = (Product =[], action) => {
    switch (action.type) {
      case "FETCH_ALL_Product":
        return action.payload;
      default:
        return Product;
    }
  };
  export default ProductReducer;
