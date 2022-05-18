import axios from "axios";
import { Crypto } from "../../types/types";
import { cryptoSlice } from "./../reducers/CryptoSlice";
import { AppDispatch } from "./../store";

export const fetchCrypto = (currency: string) => {
  const base_url =
    process.env.REACT_APP_API_URL +
    "coins/markets?vs_currency=" +
    currency +
    "&order=market_cap_desc&per_page=7&page=1&sparkline=false";
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(cryptoSlice.actions.fetchCrypto());
      const res = await axios.get<Crypto[]>(base_url);
      if (res.status === 200) {
        dispatch(cryptoSlice.actions.fetchCryptoSuccess(res));
      } else {
        dispatch(cryptoSlice.actions.fetchCryptoError(res));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
