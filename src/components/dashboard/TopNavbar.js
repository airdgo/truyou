import { SearchBar } from "./SearchBar";
import { useAuth } from "../authentication/AuthProvider";

export const TopNavbar = () => {
	const { currentUser } = useAuth();

	return (
		<nav className="w-full absolute bg-primary flex justify-between py-3 pl-20">
			<SearchBar />
			<ul className="text-white">
				<li>Hello, {currentUser.attributes.given_name}</li>
			</ul>
		</nav>
	);
};
