import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favorites.slice';

export function makeStore() {
  return configureStore({
    reducer: {
      favorites: favoritesReducer,
    },
  });
}

const store = makeStore();

export default store;
