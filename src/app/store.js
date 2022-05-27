import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../Features/Sidebar/sidebarSlice";
import postsModalReducer from "../Features/PostsModal/postsModalSlice";
import postsReducer from "../Features/Posts/postsSlice";

export const store = configureStore({
	reducer: {
		sidebar: sidebarReducer,
		postsModal: postsModalReducer,
		posts: postsReducer,
	},
});

export const AppProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
