import { createSlice } from "@reduxjs/toolkit";

const authenSlice = createSlice({
    name: 'authentication',
    initialState: {
        value: false
    }, reducers: {
        onLogin: (state, action) => {
            state.value = action.payload;
            console.log("Login");
        },
        onSignUp: (state, action) => {
            state.value = action.payload;
            console.log("SignUp");
        }
    }
});

export const {onLogin, onSignUp} = authenSlice.actions;

export default authenSlice.reducer;