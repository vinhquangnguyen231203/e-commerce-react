import { createSlice } from "@reduxjs/toolkit"
import { getCategoryByIdThunk, getCategoryThunk } from "../thunk/categoryThunk"

const initialState= {
    categories: [],
    statusAll: 'idle',
    errorAll: null,
    category: {},
    status: 'idle',
    error: null
}

const categorySlice = createSlice({
    name:"categories",
    initialState,
    extraReducers: (builder) => {
        (builder)
            .addCase(getCategoryThunk.pending, (state) => {
                state.statusAll = 'loading'
            })
            .addCase(getCategoryThunk.fulfilled, (state, action) => {
                state.statusAll = 'suceeded'
                state.categories = action.payload
            })
            .addCase(getCategoryThunk.rejected, (state, action) => {
                state.statusAll = 'failed'
                state.errorAll = action.error.message
            })
            .addCase(getCategoryByIdThunk.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getCategoryByIdThunk.fulfilled, (state, action) => {
                state.status= 'suceeded'
                state.categories = action.payload
            })
            .addCase(getCategoryByIdThunk.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})


export default categorySlice.reducer