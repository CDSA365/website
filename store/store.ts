import {
    AnyAction,
    CombinedState,
    combineReducers,
    configureStore,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { counterReducer } from "./slice/counter-slice";
import { userReducer } from "./slice/user-slice";

interface IState extends CombinedState<any> {
    counter: {
        value: number;
    };
    user: {
        data: {
            [x: string]: any;
            isLoggedIn?: boolean;
        };
    };
}

const DEBUG: boolean = process.env.NODE_ENV !== "production";

const persistConfig: PersistConfig<any> = {
    key: "root",
    storage,
};

const combinedReducer = combineReducers<IState, AnyAction>({
    counter: counterReducer,
    user: userReducer,
});

// const rootReducer = (state: any, action: AnyAction) => {
//     return action.type === HYDRATE
//         ? { ...state, ...action.payload }
//         : combinedReducer;
// };

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: false,
        }),
    ],
});

const makeStore = () => store;
export const wrapper = createWrapper(makeStore, { debug: DEBUG });
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof combinedReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
