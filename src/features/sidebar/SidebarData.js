import { FaCircle } from "react-icons/fa";
import { MyProfileIcon } from "../../Icons/SidebarIcons/MyProfileIcon";
import { MyFriendsIcon } from "../../Icons/SidebarIcons/MyFriendsIcon";
import { PostsIcon } from "../../Icons/SidebarIcons/PostsIcon";
import { CryptoIcon } from "../../Icons/SidebarIcons/CryptoIcon";
import { BucketListIcon } from "../../Icons/SidebarIcons/BucketListIcon";
import { LogoutIcon } from "../../Icons/SidebarIcons/LogoutIcon";
import { MySettingsIcon } from "../../Icons/SidebarIcons/MySettingsIcon";
import { MyStatusIcon } from "../../Icons/SidebarIcons/MyStatusIcon";
import { AllMyFriendsIcon } from "../../Icons/SidebarIcons/AllMyFriendsIcon";
import { FriendsStatusIcon } from "../../Icons/SidebarIcons/FriendsStatusIcon";
import { FriendsSettingsIcon } from "../../Icons/SidebarIcons/FriendsSettingsIcon";
import { PostSettingsIcon } from "../../Icons/SidebarIcons/PostSettingsIcon";
import { AlbumsIcon } from "../../Icons/SidebarIcons/AlbumsIcon";
import { CloseSidebarIcon } from "../../Icons/SidebarIcons/CloseSidebarIcon";
import { useAuth } from "../../Authentication/AuthProvider";
import { useSelector } from "react-redux";

export const SidebarData = [
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

export const LogoIcon = () => {
	const sidebarExtended = useSelector((state) => state.sidebar.sidebarExtended);

	return sidebarExtended ? (
		<li className="flex w-full items-center justify-between text-2xl">
			<FaCircle className="cursor-pointer" />
			<CloseSidebarIcon />
		</li>
	) : (
		<li className="text-2xl">
			<FaCircle className="cursor-pointer" />
		</li>
	);
};

export const ProfileIconCompressed = () => {
	return (
		<li className="cursor-pointer text-2xl">
			<FaCircle />
		</li>
	);
};

export const ProfileIconExtended = () => {
	const { currentUser } = useAuth();
	return (
		<li className="flex items-center gap-2 text-2xl">
			<FaCircle className="cursor-pointer" />
			<div>
				<p className="text-base">{currentUser.attributes.given_name}</p>
				<p className="text-2xs leading-3">{currentUser.attributes.email}</p>
			</div>
		</li>
	);
};

export const SidebarLogout = ({ handleLogout }) => {
	return (
		<li className="cursor-pointer text-xl" onClick={handleLogout}>
			<LogoutIcon />
		</li>
	);
};
