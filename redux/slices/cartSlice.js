import { createSlice } from "@reduxjs/toolkit";


  const initialState = {
    products: [],
    count: 0,
    totalAmount: 0,
  };
  
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addProduct:(state,action) => {
            const isItemCart = state.products.find(
                (item) => item._id === action.payload._id
              );
              console.log(isItemCart);
              if (isItemCart) {
                const tempCart = state.products.map((item) => {
                  if (item._id === action.payload._id) {
                    let tempQty = item.quantity + action.payload.quantity;
                    let tempTotalPrice = tempQty + item.price;
                    return {
                      ...item,
                      quantity: tempQty,
                      total: tempTotalPrice,
                    };
                  } else {
                    return item;
                  }
                });
                state.products = tempCart;
                
              } else {
                state.products.push(action.payload);
                
              }
        },
        removeFromCart: (state, action) => {
            const tempCart = state.products.filter((item) => item._id !== action.payload);
            state.products = tempCart;
            
          },
          clearCart: (state) => {
            state.products = [];
            
          },
          getCartTotal: (state) => {
            state.totalAmount = state.products.reduce((cartTotal, cartItem) => {
              return (cartTotal += cartItem.price * cartItem.quantity);
            }, 0);
            state.count = state.products.length;
          },
    }
})

export const {addProduct, removeFromCart, clearCart, getCartTotal} = cartSlice.actions;
export default cartSlice.reducer;