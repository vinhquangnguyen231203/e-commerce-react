import { createAsyncThunk } from "@reduxjs/toolkit";
import productAPI from "../../utilities/api/ProductAPI";


export const getProductThunk = createAsyncThunk('/products/fetch', async(params) => {
    try{
        const res = await productAPI.getAll(params);
        return res
    }
    catch(error) {
        throw error
    }
})