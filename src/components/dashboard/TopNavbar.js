import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";
import { useAuth } from "../authentication/AuthProvider";
import { useNavigate } from "react-router-dom";

export const TopNavbar = () => {
	const { logout, currentUser } = useAuth();
	const navigate = useNavigate();

	async function handleLogout(data) {
		try {
			await logout();
			navigate("/login");
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<nav className="absolute w-full bg-primary flex justify-between py-3 px-4">
			<SearchBar />
			<ul className="text-white">
				<li>Hello, {currentUser.attributes.given_name}</li>
			</ul>
			<button onClick={handleLogout}>Logout</button>
		</nav>
	);
};
