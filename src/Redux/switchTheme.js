import { createSlice } from '@reduxjs/toolkit'

const desiredTheme = localStorage.getItem("themeColor") === 'false' ? false : true;

export const switchTheme = createSlice({
  name: 'LDTheme',
  initialState: {
    value: desiredTheme,
  },
  reducers: {
    toggleTheme: (state) => {
      const desiredTheme = localStorage.getItem("themeColor") === 'true' ? false : true;
      state.value = desiredTheme
      localStorage.setItem("themeColor", desiredTheme);    
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleTheme } = switchTheme.actions

export default switchTheme.reducer