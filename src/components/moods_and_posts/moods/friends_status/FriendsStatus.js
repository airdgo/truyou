import { ThreeDotsIcon } from "../../../../icons/MoodsAndPostsIcons/ThreeDotsIcon";
import { FriendsGraphic } from "./FriendsGraphic";

export const FriendsStatus = () => {
	return (
		<section>
			<header className="text-neutralDark flex justify-between items-center">
				<div className="text-2xs">Friends emotions status</div>
				<ThreeDotsIcon />
			</header>
			<FriendsGraphic />
		</section>
	);
};
