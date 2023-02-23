import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { covidApi } from "../services/CovidNews";

export default configureStore ({
    reducer : {
        [covidApi.reducerPath]:covidApi.reducer,
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware().concat(covidApi.middleware)
})