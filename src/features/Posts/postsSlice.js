import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
	{
		id: 0,
		mood: "happy",
		date: "data",
		reactions: "",
		message: "lasdhfjklasdhlkasjdflkj",
		imagePath: "imgpath",
	},
];

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postAdded: {
			reducer: (state, action) => {
				state.push(action.payload);
			},
			prepare: (mood, date, reactions, message, imagePath) => {
				return {
					payload: {
						id: nanoid(),
						mood,
						date,
						reactions,
						message,
						imagePath,
					},
				};
			},
		},
	},
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
