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
    addinitialProducts:(state,action)=>{
     const {products}= action.payload
     console.log(products,action.payload)
     products.forEach(element => {
         state.quantity+= 1
         state.total+= element.quantity*element.price
         state.products.push(element)
     });
   
    },
    logoutRefresh:(state,action)=>{
      state.products=[]
      state.quantity = 0
      state.total = 0
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

export const { addProduct,deleteProduct,addinitialProducts,logoutRefresh } = cartSlice.actions;
export default cartSlice.reducer;