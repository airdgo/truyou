import { ImageIcon } from "../../Icons/MoodsAndPostsIcons/ImageIcon";

export const NoPostsAdded = ({ currentUser = "user not specified" }) => {
	return (
		<div className="flex min-h-[80%] flex-col items-center justify-center gap-6 text-center text-neutralDarker">
			<ImageIcon />
			<span className="text-xl font-bold">Hello, {currentUser}!</span>
			<p className="max-w-xs text-sm font-normal">
				There's no posts here yet. Start posting so you can keep your memories.
			</p>
		</div>
	);
};
