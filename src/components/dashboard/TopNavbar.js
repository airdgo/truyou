import { SearchBar } from "./SearchBar";
import { useAuth } from "../authentication/AuthProvider";
import { RiBitCoinLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

export const TopNavbar = () => {
	const { currentUser } = useAuth();

	return (
		<nav className="w-full absolute bg-primary flex justify-between items-center py-3 pl-20">
			<SearchBar />
			<div className="flex">
				<div className="text-search text-white">
					<span className=" font-bold">Hello, </span>
					{currentUser.attributes.given_name}
				</div>
				<ul className="text-white flex text-xl gap-4 mx-20">
					<li>
						<RiBitCoinLine />
					</li>
					<li>
						<FiBell />
					</li>
					<li>
						<FiMail />
					</li>
				</ul>
			</div>
		</nav>
	);
};
