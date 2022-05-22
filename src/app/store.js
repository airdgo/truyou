import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../Features/Sidebar/sidebarSlice";
import postsModalReducer from "../Features/PostsModal/postsModalSlice";

export const store = configureStore({
	reducer: {
		sidebar: sidebarReducer,
		postsModal: postsModalReducer,
	},
});

export const AppProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
