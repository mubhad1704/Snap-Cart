import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // actions
    // 1. add to wishlist
    addToCart(state, action) {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id,
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalPrice =
          existingProduct.quantity * existingProduct.price;
        alert("Product quantity increased");
      } else {
        state.items.push({
          ...product,
          quantity: 1,
          totalPrice: product.price,
        });
        alert("Product added to cart");
      }
    },
    // 2. delete from cart
    deleteFromCart(state, action) {
      const productID = action.payload;
      return {
        ...state,
        items: state.items.filter((item) => item.id !== productID),
      };
    },
    // 3. Increment quantity
    increaseQuantity(state, action) {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id,
      );
      existingProduct.quantity++;
      existingProduct.totalPrice =
        existingProduct.quantity * existingProduct.price;
    },
    // 4. Decrement quantity
    decreaseQuantity(state, action) {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id,
      );
      if (existingProduct.quantity == 1) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== product.id),
        };
      } else {
        existingProduct.quantity--;
        existingProduct.totalPrice =
          existingProduct.quantity * existingProduct.price;
      }
    },
  },
});

export const { addToCart, deleteFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
