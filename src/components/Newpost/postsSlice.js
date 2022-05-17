import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	modalOpen: false,
};

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		toggleModal: (state) => {
			state.modalOpen = !state.modalOpen;
		},
	},
});

export const { toggleModal } = postsSlice.actions;

export default postsSlice.reducer;
