import {configureStore} from '@reduxjs/toolkit'
import productSlice from './reducers/productSlice'
import cartSlice from './reducers/cartSlice'
import wishSlice from './reducers/wishSlice'
import searchSlice from './reducers/searchSlice'
import categorySlice from './reducers/categorySlice'

const store = configureStore({
    reducer: {
        'products': productSlice,
        'carts': cartSlice,
        'store': wishSlice,
        'search': searchSlice,
        'wish': wishSlice,
        'categories': categorySlice
    }
})

export default store