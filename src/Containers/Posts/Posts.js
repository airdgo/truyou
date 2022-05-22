import { ThreeDotsIcon } from "../../Icons/MoodsAndPostsIcons/ThreeDotsIcon";
import { PrimaryButton } from "../../Components/PrimaryButton";
import { LayersIcon } from "../../Icons/MoodsAndPostsIcons/LayersIcon";
import { GridIcon } from "../../Icons/MoodsAndPostsIcons/GridIcon";
import { useAuth } from "../../Authentication/AuthProvider";
import { Section } from "../../Components/Section";
import { Modal } from "../../Containers/AddPost/Modal";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../Features/PostsModal/postsModalSlice";
import { NoPostsAdded } from "./NoPostsAdded";
import { PostsAdded } from "./PostsAdded";

export const Posts = () => {
	const { currentUser } = useAuth();
	const modalOpen = useSelector((state) => state.postsModal.modalOpen);
	const dispatch = useDispatch();
	const postsAdded = true;

	return (
		<Section className="min-h-screen">
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

			{postsAdded ? (
				<PostsAdded />
			) : (
				<NoPostsAdded currentUser={currentUser.attributes.given_name} />
			)}
		</Section>
	);
};
