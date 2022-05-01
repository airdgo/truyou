import { SearchBar } from "./Searchbar";
import { useAuth } from "../authentication/AuthProvider";
import { CryptoIcon } from "../../icons/SidebarIcons/CryptoIcon";
import { BellIcon } from "../../icons/NavbarIcons/BellIcon";
import { MessageIcon } from "../../icons/NavbarIcons/MessageIcon";
import { useSidebar } from "../Dashboard/Dashboard";

export const Navbar = () => {
	const { currentUser } = useAuth();
	const { sidebarExtended } = useSidebar();

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
