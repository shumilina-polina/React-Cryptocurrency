import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./reducers/CryptoSlice";

const rootReducer = combineReducers({
  cryptoReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
