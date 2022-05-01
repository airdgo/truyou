import { ThreeDotsIcon } from "../../icons/MoodsAndPostsIcons/ThreeDotsIcon";
import { PrimaryButton } from "../PrimaryButton";
import { LayersIcon } from "../../icons/MoodsAndPostsIcons/LayersIcon";
import { GridIcon } from "../../icons/MoodsAndPostsIcons/GridIcon";
import { useAuth } from "../authentication/AuthProvider";
import { ImageIcon } from "../../icons/MoodsAndPostsIcons/ImageIcon";
import { Section } from "../Section";
import { Modal } from "../Newpost/Modal";
import { useState } from "react";

export const Posts = () => {
	const { currentUser } = useAuth();
	const [modalOpen, setModalOpen] = useState(false);

	const closeModal = () => setModalOpen(false);
	const openModal = () => setModalOpen(true);

	return (
		<Section>
			<header className="flex flex-col gap-8">
				<div className="text-neutralDark flex justify-between items-center">
					<div className="text-xs">Posts</div>
					<ThreeDotsIcon />
				</div>
				<div className="flex items-center justify-between">
					<div className="flex gap-4">
						<PrimaryButton bgColor="bg-accent" onClick={() => openModal()}>
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

			{modalOpen && <Modal modalOpen={modalOpen} handleClose={closeModal} />}

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
