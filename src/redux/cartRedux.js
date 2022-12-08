import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProduct:(state,action)=>{
      state.quantity -= 1;
      const item = action.payload
      //console.log(state.products)
      console.log(item)
      let products=state.products
      state.products=products.filter((x,idx)=>idx!==item.index)
      state.total -= item.price * item.quantity;
    }
  },
});

export const { addProduct,deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;