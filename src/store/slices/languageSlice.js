import { createSlice } from "@reduxjs/toolkit";
import CONSTANTS from "../../constants";

const { LANGUAGE } = CONSTANTS;

const initialState = LANGUAGE.UA_UA.VALUE;


const languageSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang: (state, actions) => actions.payload,
  },
});

const { reducer, actions } = languageSlice;
const { setLang } = actions;

export { setLang };
export default reducer;