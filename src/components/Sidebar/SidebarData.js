import { FiUser } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiFolder } from "react-icons/fi";
import { RiBitCoinLine } from "react-icons/ri";
import { RiFileListLine } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { FiMap } from "react-icons/fi";
import { FiGlobe } from "react-icons/fi";
import { FriendsStatusIcon } from "../../icons/FriendsStatusIcon";
import { FriendsSettingsIcon } from "../../icons/FriendsSettingsIcon";
import { PostSettingsIcon } from "../../icons/PostSettingsIcon";
import { AlbumsIcon } from "../../icons/AlbumsIcon";
import { useSidebar } from "./Sidebar";
import { useAuth } from "../authentication/AuthProvider";

export const SidebarData = [
	{
		name: "",
		icon: <FaCircle />,
		className: "text-2xl cursor-pointer",
	},
	{
		name: "My profile",
		icon: <FiUser />,
		secondLevel: [
			{
				name: "My settings",
				icon: <FiSettings />,
			},
			{
				name: "My status",
				icon: <FiMap />,
			},
		],
	},
	{
		name: "My friends",
		icon: <FiUsers />,
		secondLevel: [
			{
				name: "All my friends",
				icon: <FiGlobe />,
			},
			{
				name: "Friends settings",
				icon: <FriendsSettingsIcon />,
			},
			{
				name: "Friends status",
				icon: <FriendsStatusIcon />,
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
				icon: <PostSettingsIcon />,
			},
			{
				name: "Albums",
				icon: <AlbumsIcon />,
			},
		],
	},
	{
		name: "Crypto",
		icon: <RiBitCoinLine />,
	},
];

export const ProfileIconCompressed = () => {
	return (
		<li className="text-2xl cursor-pointer">
			<FaCircle />
		</li>
	);
};

export const ProfileIconExtended = () => {
	const { currentUser } = useAuth();
	return (
		<li className="text-2xl flex items-center gap-2">
			<FaCircle className="cursor-pointer" />
			<div>
				<p className="text-base">{currentUser.attributes.given_name}</p>
				<p className="text-2xs leading-none">{currentUser.attributes.email}</p>
			</div>
		</li>
	);
};

export const LogoutIcon = () => {
	const { handleLogout } = useSidebar();
	return (
		<li className="text-xl cursor-pointer" onClick={handleLogout}>
			<FiLogOut />
		</li>
	);
};
