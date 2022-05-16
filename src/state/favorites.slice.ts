import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addMovie: (state: any, action) => {
      if (action) {
        const movie = action.payload;
        state.push(movie);
      }
    },
  },
});

export const { addMovie } = favoritesSlice.actions;

export default favoritesSlice.reducer;
