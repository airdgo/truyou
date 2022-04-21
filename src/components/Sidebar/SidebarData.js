import { FaCircle } from "react-icons/fa";
import { MyProfileIcon } from "../../icons/SidebarIcons/MyProfileIcon";
import { MyFriendsIcon } from "../../icons/SidebarIcons/MyFriendsIcon";
import { PostsIcon } from "../../icons/SidebarIcons/PostsIcon";
import { CryptoIcon } from "../../icons/SidebarIcons/CryptoIcon";
import { BucketListIcon } from "../../icons/SidebarIcons/BucketListIcon";
import { LogoutIcon } from "../../icons/SidebarIcons/LogoutIcon";
import { MySettingsIcon } from "../../icons/SidebarIcons/MySettingsIcon";
import { MyStatusIcon } from "../../icons/SidebarIcons/MyStatusIcon";
import { AllMyFriendsIcon } from "../../icons/SidebarIcons/AllMyFriendsIcon";
import { FriendsStatusIcon } from "../../icons/SidebarIcons/FriendsStatusIcon";
import { FriendsSettingsIcon } from "../../icons/SidebarIcons/FriendsSettingsIcon";
import { PostSettingsIcon } from "../../icons/SidebarIcons/PostSettingsIcon";
import { AlbumsIcon } from "../../icons/SidebarIcons/AlbumsIcon";
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
		icon: <MyProfileIcon />,
		secondLevel: [
			{
				name: "My settings",
				icon: <MySettingsIcon />,
			},
			{
				name: "My status",
				icon: <MyStatusIcon />,
			},
		],
	},
	{
		name: "My friends",
		icon: <MyFriendsIcon />,
		secondLevel: [
			{
				name: "All my friends",
				icon: <AllMyFriendsIcon />,
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
		icon: <BucketListIcon />,
	},
	{
		name: "Posts",
		icon: <PostsIcon />,
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
		icon: <CryptoIcon />,
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

export const SidebarLogout = () => {
	const { handleLogout } = useSidebar();
	return (
		<li className="text-xl cursor-pointer" onClick={handleLogout}>
			<LogoutIcon />
		</li>
	);
};
