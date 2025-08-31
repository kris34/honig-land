import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    language: 'DE'
};

const generalSlice = createSlice({
    name: 'general',
    initialState: initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action?.payload;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        }
    }
});

export const { setIsLoading } = generalSlice.actions;
export default generalSlice.reducer;