import { ThreeDotsIcon } from "../../icons/MoodsAndPostsIcons/ThreeDotsIcon";
import { PrimaryButton } from "../PrimaryButton";
import { LayersIcon } from "../../icons/MoodsAndPostsIcons/LayersIcon";
import { GridIcon } from "../../icons/MoodsAndPostsIcons/GridIcon";
import { useAuth } from "../authentication/AuthProvider";
import { ImageIcon } from "../../icons/MoodsAndPostsIcons/ImageIcon";
import { Section } from "../Section";

export const Posts = () => {
	const { currentUser } = useAuth();

	return (
		<Section>
			<header className="flex flex-col gap-8">
				<div className="text-neutralDark flex justify-between items-center">
					<div className="text-xs">Posts</div>
					<ThreeDotsIcon />
				</div>
				<div className="flex items-center justify-between">
					<div className="flex gap-4">
						<PrimaryButton bgColor="bg-accent">Add new post</PrimaryButton>
						<PrimaryButton bgColor="bg-accent">Add new friend</PrimaryButton>
					</div>
					<div className="flex gap-3">
						<GridIcon />
						<LayersIcon />
					</div>
				</div>
			</header>

			<div className="flex items-center justify-center min-h-[80%] text-center text-neutralDarker flex-col  gap-6">
				<ImageIcon />
				<span className="font-bold text-xl">
					Hello, {currentUser.attributes.given_name}!
				</span>
				<p className="font-normal text-sm max-w-xs">
					There's no posts here yet. Start posting so you can keep your
					memories.
				</p>
			</div>
		</Section>
	);
};
