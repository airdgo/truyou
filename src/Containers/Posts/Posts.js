import { ThreeDotsIcon } from "../../Icons/MoodsAndPostsIcons/ThreeDotsIcon";
import { PrimaryButton } from "../../Components/PrimaryButton";
import { LayersIcon } from "../../Icons/MoodsAndPostsIcons/LayersIcon";
import { GridIcon } from "../../Icons/MoodsAndPostsIcons/GridIcon";
import { useAuth } from "../../Authentication/AuthProvider";
import { Section } from "../../Components/Section";
import { Modal } from "../../Containers/AddPost/Modal";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../Features/PostsModal/postsModalSlice";
import { selectAllPosts } from "../../Features/Posts/postsSlice";
import { NoPostsAdded } from "./NoPostsAdded";
import { PostsAdded } from "./PostsAdded";
import { useEffect } from "react";

export const Posts = () => {
	const { currentUser } = useAuth();
	const postsModal = useSelector((state) => state.postsModal);
	const posts = useSelector(selectAllPosts);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!postsModal.modalOpen) return;

		const closeModal = (e) => {
			if (e.key === "Escape") {
				dispatch(toggleModal());
			}
		};

		window.addEventListener("keydown", closeModal);
		return () => window.removeEventListener("keydown", closeModal);
	}, [postsModal.modalOpen]);

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

			{postsModal.modalOpen && <Modal />}

			{posts.length ? (
				<PostsAdded />
			) : (
				<NoPostsAdded currentUser={currentUser.attributes.given_name} />
			)}
		</Section>
	);
};
