import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	extended: false,
};

export const sidebarSlice = createSlice({
	name: "sidebar",
	initialState,
	reducers: {
		toggleSidebar: (state) => {
			state.extended = !state.extended;
		},
	},
});

export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
