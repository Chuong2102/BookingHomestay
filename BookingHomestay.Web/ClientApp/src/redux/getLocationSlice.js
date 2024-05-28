import { createSlice } from "@reduxjs/toolkit";

const getLocationSlice = createSlice({
    name: 'getLocation',
    initialState: {
        value: false
    }, reducers: {
        onGet: (state, action) => {
            state.value = action.payload;
            console.log("Get location");
        },
        onStopGet: (state, action) => {
            state.value = action.payload;
            console.log("Stop getting location");
        }
    }
});

export const {onGet, onStopGet} = getLocationSlice.actions;

export default getLocationSlice.reducer;