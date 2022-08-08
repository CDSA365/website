import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import counterReducer from "./slice/counter-slice";
import { userReducer } from "./slice/user-slice";

const combinedReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
});

export const store = () =>
    configureStore({
        reducer: combinedReducer,
    });

export const wrapper = createWrapper(store);

const storeTypes = store();
export type RootState = ReturnType<typeof storeTypes.getState>;
export type AppDispatch = typeof storeTypes.dispatch;
