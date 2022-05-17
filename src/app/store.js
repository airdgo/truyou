import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebar/sidebarSlice";

export const store = configureStore({
	reducer: {
		sidebar: sidebarReducer,
	},
});

export const AppProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
