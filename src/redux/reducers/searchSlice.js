import { createSlice } from '@reduxjs/toolkit';
import { getProductThunk } from '../thunk/productThunk';
import diacritic from 'diacritic'; // Import thư viện diacritic

const initialState = {
    search: [],
    dataOutput: [],
    status: 'idle', 
    error: null
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        getResultSearch: (state, action) => {
            const dataInput = action.payload || "";
            // Normalize the search input by removing diacritics
            const searchInput = diacritic.clean(dataInput.trim().toLowerCase());

            const dataOutput = state.search.filter(item => {
                const title = item.name || "";
                // Normalize the title by removing diacritics
                const normalizedTitle = diacritic.clean(title.trim().toLowerCase());
                return normalizedTitle.includes(searchInput);
            });
            state.dataOutput = dataOutput;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProductThunk.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.search = action.payload.data;
            })
            .addCase(getProductThunk.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message;
            });
    }
});

export const { getResultSearch } = searchSlice.actions;
export default searchSlice.reducer;
