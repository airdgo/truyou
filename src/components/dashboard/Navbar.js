import { SearchBar } from "./SearchBar";
import { useAuth } from "../authentication/AuthProvider";
import { RiBitCoinLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

export const Navbar = () => {
	const { currentUser } = useAuth();

	return (
		<nav className="w-full bg-primary flex justify-between items-center pl-20 fixed min-h-[4rem] top-0 left-0">
			<SearchBar />
			<div className="flex items-center">
				<div className="text-search text-white">
					<span className="font-bold">Hello, </span>
					{currentUser.attributes.given_name}
				</div>
				<ul className="text-white flex text-xl gap-4 mx-20">
					<li className="cursor-pointer">
						<RiBitCoinLine />
					</li>
					<li className="cursor-pointer">
						<FiBell />
					</li>
					<li className="cursor-pointer">
						<FiMail />
					</li>
				</ul>
			</div>
		</nav>
	);
};
