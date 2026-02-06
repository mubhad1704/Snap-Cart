import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    // actions
    // 1. add to wishlist
    addToWishList(state, action) {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id,
      );
      if (existingProduct) {
        alert("Product already in wishlist");
      } else {
        state.items.push(product);
        alert("Product added to wishlist");
      }
    },
    // 2. delete from wishlist
    deleteFromWishlist(state,action){
        const productID = action.payload
        return {...state, items:state.items.filter(item=>item.id!==productID)}
    }
  },
});

export const { addToWishList, deleteFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
