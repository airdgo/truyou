import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
	{
		id: 0,
		mood: "happy",
		date: "01. 01. 2022",
		reactions: [
			{ postId: "0", username: "user1" },
			{ postId: "0", username: "user2" },
		],
		createdAt: Date.now(),
		message:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim",
		images: [],
	},
];

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postAdded: {
			reducer: (state, action) => {
				state.push(action.payload); // unshift instead of push
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
						reactions: [],
						message,
						images,
					},
				};
			},
		},
		reactionAdded: (state, action) => {
			const { postId, username } = action.payload;
			const existingPost = state.find((post) => post.id === postId);

			if (existingPost) {
				const userReactionIndex = existingPost.reactions.findIndex(
					(reaction) => reaction.username === username
				);
				if (userReactionIndex !== -1) {
					existingPost.reactions.splice(userReactionIndex, 1);
				} else existingPost.reactions.push({ postId, username });
			}
		},
	},
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
