import {createSlice} from '@reduxjs/toolkit'
import { initalDataLocal, setDataLocal } from '../../utilities/localstorage/localData'


const initialState = {
    carts: initalDataLocal(),
}

const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const data = action.payload
            state.carts = data
            setDataLocal(state.carts)
        },
        deleteCart: (state, action) => {
            const data = state.carts
            state.carts = data.filter(item => item.id !== action.payload)
            setDataLocal(state.carts)
        },
        updateCart: (state, action) => {
            const data = state.carts
            const {id, quantity, num} = action.payload
            state.carts = data.map(item => item.id === id?{...item,quantity:
                (quantity===1 & num === -1)?1:(quantity+num)
            }: item )
            setDataLocal(state.carts)
        }
        
    }
})


export const {addCart, deleteCart, updateCart} = cartSlice.actions
export default cartSlice.reducer