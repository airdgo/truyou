import { SearchBar } from "./Searchbar";
import { useAuth } from "../authentication/AuthProvider";
import { CryptoIcon } from "../../icons/SidebarIcons/CryptoIcon";
import { BellIcon } from "../../icons/NavbarIcons/BellIcon";
import { MessageIcon } from "../../icons/NavbarIcons/MessageIcon";
import { useSelector } from "react-redux";

export const Navbar = () => {
	const { currentUser } = useAuth();
	const sidebarExtended = useSelector((state) => state.sidebar.extended);

	const padding = sidebarExtended ? "pl-60" : "pl-20";
	const className =
		"w-full bg-primary flex justify-between items-center fixed min-h-[4rem] top-0 left-0 " +
		padding;

	return (
		<nav className={className}>
			<SearchBar />
			<div className="flex items-center">
				<div className="text-search text-white">
					<span className="font-bold">Hello, </span>
					{currentUser.attributes.given_name}
				</div>
				<ul className="mx-20 flex gap-4 text-xl text-white">
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
