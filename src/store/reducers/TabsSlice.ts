import { tabValue } from "./../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface TabState {
  currentTab: tabValue;
}

const initialState: TabState = {
  currentTab: tabValue.Crypto,
};

export const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    changeTab(state, action: PayloadAction<tabValue>) {
      state.currentTab = action.payload;
    },
  },
});

export default tabsSlice.reducer;
