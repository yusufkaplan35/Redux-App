import { createSlice } from "@reduxjs/toolkit";

const localeSlice = createSlice({
	name: "locale",
	initialState: {
		lang: { title: "English", code: "en", country: "gb" },
		currency: "EUR",
		timeZone: "GMT+2",
	},
	reducers: {
		setLang: (state, action) => {
			state.lang = action.payload;
		},
		setCurrency: (state, action) => {
			state.currency = action.payload;
		},
		setTimeZone: (state, action) => {
			state.timeZone = action.payload;
		},
	},
});


export const { setLang, setCurrency, setTimeZone } = localeSlice.actions;
export default localeSlice.reducer;