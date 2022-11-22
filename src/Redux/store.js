import { configureStore } from '@reduxjs/toolkit'
import switchTheme from './switchTheme'

export default configureStore({
  reducer: {
    LDTheme: switchTheme,
  },
})