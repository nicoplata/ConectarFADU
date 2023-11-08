import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice"
import { Api } from "../../src/services/Api";

export const store = configureStore({
    reducer: {
        homeSlice,
        [Api.reducerPath]: Api.reducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware)
})