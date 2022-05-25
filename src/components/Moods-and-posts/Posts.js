import { ThreeDotsIcon } from "../../Icons/MoodsAndPostsIcons/ThreeDotsIcon";
import { PrimaryButton } from "../PrimaryButton";
import { LayersIcon } from "../../Icons/MoodsAndPostsIcons/LayersIcon";
import { GridIcon } from "../../Icons/MoodsAndPostsIcons/GridIcon";
import { useAuth } from "../authentication/AuthProvider";
import { ImageIcon } from "../../Icons/MoodsAndPostsIcons/ImageIcon";
import { Section } from "../Section";
import { Modal } from "../Newpost/Modal";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../Newpost/postsSlice";

export const Posts = () => {
	const { currentUser } = useAuth();
	const modalOpen = useSelector((state) => state.posts.modalOpen);
	const dispatch = useDispatch();

	return (
		<Section>
			<header className="flex flex-col gap-8">
				<div className="flex items-center justify-between text-neutralDark">
					<div className="text-xs">Posts</div>
					<ThreeDotsIcon />
				</div>
				<div className="flex items-center justify-between">
					<div className="flex gap-4">
						<PrimaryButton
							bgColor="bg-accent"
							onClick={() => dispatch(toggleModal())}
						>
							Add new post
						</PrimaryButton>
						<PrimaryButton bgColor="bg-accent">Add new friend</PrimaryButton>
					</div>
					<div className="flex gap-3">
						<GridIcon />
						<LayersIcon />
					</div>
				</div>
			</header>

			{modalOpen && <Modal />}

			<div className="flex min-h-[80%] flex-col items-center justify-center gap-6 text-center  text-neutralDarker">
				<ImageIcon />
				<span className="text-xl font-bold">
					Hello, {currentUser.attributes.given_name}!
				</span>
				<p className="max-w-xs text-sm font-normal">
					There's no posts here yet. Start posting so you can keep your
					memories.
				</p>
			</div>
		</Section>
	);
};
