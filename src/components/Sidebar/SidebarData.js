import { FiUser } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiFolder } from "react-icons/fi";
import { RiBitCoinLine } from "react-icons/ri";
import { RiFileListLine } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useSidebar } from "./Sidebar";

export const SidebarData = [
	{
		name: "",
		icon: <FaCircle />,
		className: "text-black text-2xl",
	},
	{
		name: "My profile",
		icon: <FiUser />,
		secondLevel: [
			{
				name: "My settings",
				icon: <FaCircle />,
			},
			{
				name: "My status",
				icon: <FaCircle />,
			},
		],
	},
	{
		name: "My friends",
		icon: <FiUsers />,
		secondLevel: [
			{
				name: "All my friends",
				icon: <FaCircle />,
			},
			{
				name: "Friends settings",
				icon: <FaCircle />,
			},
			{
				name: "Friends status",
				icon: <FaCircle />,
			},
		],
	},
	{
		name: "Bucket list",
		icon: <RiFileListLine />,
	},
	{
		name: "Posts",
		icon: <FiFolder />,
		secondLevel: [
			{
				name: "Posts settings",
				icon: <FaCircle />,
			},
			{
				name: "Albums",
				icon: <FaCircle />,
			},
		],
	},
	{
		name: "Crypto",
		icon: <RiBitCoinLine />,
	},
];

export const ProfileIcon = () => {
	return (
		<li className="text-black text-2xl">
			<FaCircle />
		</li>
	);
};

export const LogoutIcon = () => {
	const { handleLogout } = useSidebar();
	return (
		<li className="text-primary text-xl cursor-pointer" onClick={handleLogout}>
			<FiLogOut />
		</li>
	);
};
