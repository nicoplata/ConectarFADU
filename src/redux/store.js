import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice"
import { Api } from "../../src/services/Api";
import authSlice from "./slices/authSlice"

export const store = configureStore({
    reducer: {
        homeSlice,
        [Api.reducerPath]: Api.reducer,
        authSlice,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware)
})