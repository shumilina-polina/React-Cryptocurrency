import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tabsReducer from "./reducers/TabsSlice";

const rootReducer = combineReducers({
  tabsReducer,
});

export const setupStore = () => {
  return configureStore({ reducer: rootReducer });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
