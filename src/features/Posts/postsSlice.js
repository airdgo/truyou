import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
	// {
	// 	id: 0,
	// 	mood: "happy",
	// 	date: "01. 01. 2022",
	// 	reactions: "John, Doe, Joe and other 3",
	// 	message:
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim",
	// 	images: [],
	// },
];

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postAdded: {
			reducer: (state, action) => {
				state.push(action.payload);
			},
			prepare: (mood, reactions, message, images) => {
				const today = new Date();
				const newdate =
					today.getDate() +
					". " +
					(today.getMonth() + 1) +
					". " +
					today.getFullYear();
				return {
					payload: {
						id: nanoid(),
						createdAt: Date.now(),
						mood,
						date: newdate,
						reactions,
						message,
						images,
					},
				};
			},
		},
	},
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
