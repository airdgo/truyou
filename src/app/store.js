import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../components/Sidebar/sidebarSlice";

export const store = configureStore({
	reducer: {
		sidebar: sidebarReducer,
	},
});

export const AppProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
