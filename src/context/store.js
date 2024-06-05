import { configureStore } from '@reduxjs/toolkit'
import { api } from './api/api'
import wishlist from './slice/wishlistSlice'



export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        wishlist,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})