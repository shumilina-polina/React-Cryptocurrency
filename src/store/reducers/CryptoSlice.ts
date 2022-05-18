import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Crypto } from "../../types/types";

interface CryptoState {
  crypto: Crypto[];
  isLoading: boolean;
  error: string;
}

const initialState: CryptoState = {
  crypto: [
    {
      image: "",
      name: "",
      id: "",
      symbol: "",
      current_price: 0,
      total_volume: 0,
      price_change_percentage_24h: 0,
    },
  ],
  isLoading: false,
  error: "",
};

export const cryptoSlice = createSlice({
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

export default cryptoSlice.reducer;
