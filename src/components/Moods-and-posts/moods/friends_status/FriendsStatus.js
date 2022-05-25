import { ThreeDotsIcon } from "../../../../Icons/MoodsAndPostsIcons/ThreeDotsIcon";
import { FriendsGraphic } from "./FriendsGraphic";

export const FriendsStatus = () => {
	return (
		<section>
			<header className="flex items-center justify-between text-neutralDark">
				<div className="text-2xs">Friends emotions status</div>
				<ThreeDotsIcon />
			</header>
			<FriendsGraphic />
		</section>
	);
};
