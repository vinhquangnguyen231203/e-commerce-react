import {createSlice} from '@reduxjs/toolkit'
import { initialWishData, setWishData } from '../../utilities/localstorage/localData'

const initialState = {
    wish: initialWishData()    
}

const wishSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
        addWish: (state, action ) => {
            let data = state.wish
            data = [...data, action.payload]
            state.wish = data
            setWishData(state.wish)
        },
        deleteWish: (state, action) => {
            const id = action.payload
            const data = state.wish
            state.wish =  data.filter(item => item.id !== id)
            setWishData(state.wish)
        },
        
    }
})

export const {addWish, deleteWish} = wishSlice.actions
export default wishSlice.reducer