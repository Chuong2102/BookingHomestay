import { createSlice } from "@reduxjs/toolkit";

const getRoomslice = createSlice({
    name: 'getRooms',
    initialState: {
        value: false
    }, reducers: {
        onGet: (state, action) => {
            state.value = action.payload;
            console.log("Get rooms");
        },
        onStopGet: (state, action) => {
            state.value = action.payload;
            console.log("Stop getting rooms");
        }
    }
});

export const {onGet, onStopGet} = getRoomslice.actions;

export default getRoomslice.reducer;