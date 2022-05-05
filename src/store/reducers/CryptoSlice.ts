import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

interface Crypto {
  id: string;
  name: string;
  current_price: string;
  symbol: string;
}

interface CryptoState {
  crypto: Crypto[];
  isLoading: boolean;
  error: string;
}

const initialState: CryptoState = {
  crypto: [],
  isLoading: false,
  error: "",
};

export const CryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    fetchCrypto(state) {
      state.isLoading = true;
    },
    fetchCryptoSuccess(state, action: PayloadAction<AxiosResponse<Crypto[]>>) {
      state.isLoading = false;
      state.crypto = action.payload.data;
    },
    fetchCryptoError(state, action: PayloadAction<AxiosResponse<Crypto[]>>) {
      state.isLoading = false;
      state.error = action.payload.statusText;
    },
  },
});

export default CryptoSlice.reducer;
