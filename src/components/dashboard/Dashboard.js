import { DashboardContainer } from "./DashboardContainer";
import { Bucketlist } from "../Bucketlist/Bucketlist";
import { SideBar } from "../Sidebar/Sidebar";
import { MoodAndPosts } from "../Moods-and-posts/MoodAndPosts";
import { Navbar } from "../Navbar/Navbar";
import { useAuth } from "../authentication/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState, createContext, useContext } from "react";

const SidebarContext = createContext();

export function useSidebar() {
	return useContext(SidebarContext);
}

export const Dashboard = () => {
	const { logout } = useAuth();
	const navigate = useNavigate();

	async function handleLogout() {
		try {
			await logout();
			navigate("/login");
		} catch (error) {
			console.log(error.message);
		}
	}
	const value = {
		handleLogout,
	};

	return (
		<SidebarContext.Provider value={value}>
			<DashboardContainer>
				<Navbar />
				<SideBar />
				<MoodAndPosts />
				<Bucketlist />
			</DashboardContainer>
		</SidebarContext.Provider>
	);
};
