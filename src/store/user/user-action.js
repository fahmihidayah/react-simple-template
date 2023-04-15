import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        token : null
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload.token;
        }
    }
})


export const userAction = userSlice.actions;

export default userSlice;