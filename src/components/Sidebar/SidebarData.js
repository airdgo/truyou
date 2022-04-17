import { FiUser } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiFolder } from "react-icons/fi";
import { RiBitCoinLine } from "react-icons/ri";
import { RiFileListLine } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";

export const SidebarData = [
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
