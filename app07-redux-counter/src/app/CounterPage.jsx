import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '@reduxjs/toolkit'


export const store = configureStore({
  reducer: {counterReducer},
})
