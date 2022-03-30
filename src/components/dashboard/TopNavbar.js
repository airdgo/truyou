import { SearchBar } from "./SearchBar";
import { useAuth } from "../authentication/AuthProvider";

export const TopNavbar = () => {
	const { currentUser } = useAuth();

	return (
		<nav className="absolute w-full bg-primary flex justify-between py-3 px-4">
			<SearchBar />
			<ul className="text-white">
				<li>Hello, {currentUser.attributes.given_name}</li>
			</ul>
		</nav>
	);
};
