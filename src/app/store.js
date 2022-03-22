import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { cocktailApi } from "../services/cocktailApi";

export const store = configureStore({
    reducer:{
        [cocktailApi.reducerPath]: cocktailApi.reducer,
    },


    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(cocktailApi.middleware),
})


setupListeners(store.dispatch)