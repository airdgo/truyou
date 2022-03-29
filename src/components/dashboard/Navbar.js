import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";
import { useAuth } from "../authentication/AuthProvider";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const { logout } = useAuth();
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
			<ul>
				<Link to="/user">
					<li className="text-blue-500 hover:text-blue-800">Profile</li>
				</Link>
			</ul>
			<button onClick={handleLogout}>Logout</button>
		</nav>
	);
};
