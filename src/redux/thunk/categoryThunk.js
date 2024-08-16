import { createAsyncThunk } from "@reduxjs/toolkit";
import categoryAPI from "../../utilities/api/CategoryAPI";

export const getCategoryThunk = createAsyncThunk('/categories/fetch', async() => {
    try{
        const res = await categoryAPI.getAll()
        return res
    }
    catch(error)
    {
        throw error
    }
})

export const getCategoryByIdThunk = createAsyncThunk('/categories/fetch/getID', async(id) => {
    try {
        const res = await categoryAPI.get(id)
        return res
    } catch (error) {
        throw error        
    }
})