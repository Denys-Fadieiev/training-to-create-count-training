import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice';
import languageReducer from './slices/languageSlice';
// import themeReducer from './slices/themeSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    language: languageReducer,
    // theme: themeReducer,
  },
});

export default store;
