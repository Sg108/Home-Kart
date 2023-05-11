import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userReducer"
import productReducer from "./productReducer"
import cartReducer from "./cartRedux"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
const persistConfig1 = {
    key: "root1",
    version: 1,
    storage,
}
const persistConfig2 = {
    key: "root2",
    version: 1,
    storage,
}

const persistedReducer1 = persistReducer(persistConfig1, userReducer)
const persistedReducer2 = persistReducer(persistConfig2, cartReducer)
// export const store = configureStore({
//   reducer: {
//    user:userReducer
//   },
// })
export const store = configureStore({
    reducer: {
        user: persistedReducer1,
        cart: persistedReducer2,
        product: productReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
})

export const persistor = persistStore(store)