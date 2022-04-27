import { SearchBar } from "./Searchbar";
import { useAuth } from "../authentication/AuthProvider";
import { CryptoIcon } from "../../icons/SidebarIcons/CryptoIcon";
import { BellIcon } from "../../icons/NavbarIcons/BellIcon";
import { MessageIcon } from "../../icons/NavbarIcons/MessageIcon";

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
						<CryptoIcon stroke={"#FFFF"} />
					</li>
					<li className="cursor-pointer">
						<BellIcon />
					</li>
					<li className="cursor-pointer">
						<MessageIcon />
					</li>
				</ul>
			</div>
		</nav>
	);
};
