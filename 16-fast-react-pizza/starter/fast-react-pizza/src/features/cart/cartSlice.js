import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const pizzaSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { pizzaId, name, unitPrice } = action.payload;
      const existingItem = state.cart.find((item) => item.pizzaId === pizzaId);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.unitPrice;
      } else {
        state.cart.push({
          pizzaId,
          name,
          unitPrice,
          quantity: 1,
          totalPrice: unitPrice,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const pizzaId = action.payload;
      const existingItem = state.cart.find((item) => item.pizzaId === pizzaId);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.unitPrice;
      }
    },
    decreaseQuantity: (state, action) => {
      const pizzaId = action.payload;
      const existingItem = state.cart.find((item) => item.pizzaId === pizzaId);
      if (existingItem) {
        existingItem.quantity -= 1;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.unitPrice;
        if (existingItem.quantity <= 0) {
          state.cart = state.cart.filter((item) => item.pizzaId !== pizzaId);
        }
      }
    },
    deleteFromCart: (state, action) => {
      const pizzaId = action.payload;
      state.cart = state.cart.filter((item) => item.pizzaId !== pizzaId);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteFromCart,
  clearCart,
} = pizzaSlice.actions;

export default pizzaSlice.reducer;
