import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	modalOpen: false,
	modalStep: 0,
};

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		toggleModal: (state) => {
			state.modalOpen = !state.modalOpen;
		},
		nextStep: (state) => {
			state.modalStep += 1;
		},
		prevStep: (state) => {
			state.modalStep -= 1;
		},
	},
});

export const { toggleModal, nextStep, prevStep } = postsSlice.actions;

export default postsSlice.reducer;
