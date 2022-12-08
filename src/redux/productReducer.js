import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
    },
    reducers: {
        storeProducts: (state, action) => {
            const { products } = action.payload
            state.products = products
        },
    },
})

export const { storeProducts } = productSlice.actions
export default productSlice.reducer
