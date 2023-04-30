import { configureStore } from '@reduxjs/toolkit'
import { counter, theme } from './reducer'
export const store = configureStore({
    reducer: {
        counter,
        theme
    },
})