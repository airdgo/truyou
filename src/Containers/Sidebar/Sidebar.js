import { CompresssedSidebar } from "./CompressedSidebar";
import { ExtendedSidebar } from "./ExtendedSidebar";
import { useSelector } from "react-redux";
import { useAuth } from "../../Authentication/AuthProvider";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
	const sidebarExtended = useSelector((state) => state.sidebar.extended);

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

	return sidebarExtended ? (
		<ExtendedSidebar handleLogout={handleLogout} />
	) : (
		<CompresssedSidebar handleLogout={handleLogout} />
	);
};
