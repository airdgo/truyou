import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FriendsGraphic } from "./FriendsGraphic";

export const FriendsStatus = () => {
	return (
		<section>
			<header className="text-neutralDark flex justify-between items-center">
				<div className="text-2xs">Friends emotions status</div>
				<HiOutlineDotsHorizontal className="text-xl cursor-pointer" />
			</header>
			<FriendsGraphic />
		</section>
	);
};
