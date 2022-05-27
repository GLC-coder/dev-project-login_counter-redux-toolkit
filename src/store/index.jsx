import {configureStore } from "@reduxjs/toolkit";
import counterSliceRducer from "./counter-slice";
import authSliceReducer from "./auth-slice";

const store = configureStore({
  reducer: { counter: counterSliceRducer, auth: authSliceReducer },
});


export default store;
