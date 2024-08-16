import {createSlice} from '@reduxjs/toolkit'

import { getProductThunk } from '../thunk/productThunk'

const initialState = {
    products: [],
    pagination: {
       
    },
    status: 'idle',
    error: null
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getProductThunk.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getProductThunk.fulfilled, (state, action) => {
                state.status = 'succeeded'
                console.log(action.payload)
                state.products = action.payload.data
                state.pagination = action.payload.pagination
            })
            .addCase(getProductThunk.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default productSlice.reducer
