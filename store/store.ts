import { Action, combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { counterReducer } from "./slice/counter-slice";
import { userReducer } from "./slice/user-slice";

const DEBUG: boolean = process.env.NODE_ENV !== "production";

const persistConfig: PersistConfig<any> = {
    key: "root",
    version: 1,
    storage,
};

const combinedReducer = combineReducers<any, Action>({
    counter: counterReducer,
    user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore, { debug: DEBUG });
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
