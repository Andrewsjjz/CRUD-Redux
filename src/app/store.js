import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/counter/taskSlice'

export const store = configureStore({
  reducer: {
    tasks : taskReducer
    
  },
})