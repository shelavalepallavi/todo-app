import { configureStore } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk"; // Not required but can be explicitly mentioned
import weatherReducer from "./weatherReducer";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Optional, as thunk is already included
});

export default store;
