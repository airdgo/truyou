import { createSlice } from "@reduxjs/toolkit";

const moods = [
	{
		id: 0,
		mood: "happy",
		isSelected: false,
	},
	{
		id: 1,
		mood: "sad",
		isSelected: false,
	},
	{
		id: 2,
		mood: "angry",
		isSelected: false,
	},
	{
		id: 3,
		mood: "scared",
		isSelected: false,
	},
	{
		id: 4,
		mood: "surprised",
		isSelected: false,
	},
	{
		id: 5,
		mood: "disgusted",
		isSelected: false,
	},
];

const initialState = {
	modalOpen: false,
	modalStep: 0,
	moods,
	currentMood: {},
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
		selectMood: (state, action) => {
			state.moods.map((mood) => (mood.isSelected = false));
			state.moods[action.payload].isSelected =
				!state.moods[action.payload].isSelected;
			state.currentMood = state.moods.filter((mood) => mood.isSelected)[0];
		},
	},
});

export const { toggleModal, nextStep, prevStep, selectMood } =
	postsSlice.actions;

export default postsSlice.reducer;
