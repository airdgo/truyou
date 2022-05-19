import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebar/sidebarSlice";
import postsReducer from "../components/Newpost/postsSlice";

export const store = configureStore({
	reducer: {
		sidebar: sidebarReducer,
		posts: postsReducer,
	},
});

export const AppProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
