import { createSlice } from "@reduxjs/toolkit";

const openModelSlice = createSlice({
    name: 'openModel',
    initialState: {
        value: false
    }, reducers: {
        onOpen: (state, action) => {
            state.value = action.payload;
            console.log("HAHA");
        },
        onClose: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {onOpen, onClose} = openModelSlice.actions;

export default openModelSlice.reducer;