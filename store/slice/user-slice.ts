import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        data: {},
    },
    reducers: {
        addUser: (state, action) => {
            state.data = action.payload;
        },
        removeUser: (state) => {
            state.data = {};
        },
    },
});

export const { addUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
