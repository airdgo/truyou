import { useAuth } from "../authentication/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import { CompresssedSidebar } from "./CompressedSidebar";
import { ExtendedSidebar } from "./ExtendedSidebar";

const SidebarContext = createContext();

export function useSidebar() {
	return useContext(SidebarContext);
}

export const SideBar = () => {
	const [sidebarExtended, setSidebarExtended] = useState(false);
	const { logout } = useAuth();
	const navigate = useNavigate();

	function toggleSidebar() {
		setSidebarExtended((prevState) => !prevState);
	}

	async function handleLogout() {
		try {
			await logout();
			navigate("/login");
		} catch (error) {
			console.log(error.message);
		}
	}
	const value = {
		sidebarExtended,
		toggleSidebar,
		handleLogout,
	};

	return (
		<SidebarContext.Provider value={value}>
			{sidebarExtended ? <ExtendedSidebar /> : <CompresssedSidebar />}
		</SidebarContext.Provider>
	);
};
