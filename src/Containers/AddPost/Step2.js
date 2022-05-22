import { ModalContainer } from "./ModalContainer";
import { InsertImageButton } from "../../Components/InsertImageButton";
import { InsertTextButton } from "../../Components/InsertTextButton";
import { InsertVideoButton } from "../../Components/InsertVideoButton";
import { useAuth } from "../../Authentication/AuthProvider";
import { PreviousStepButton } from "../../Components/PreviousStepButton";
import { PrimaryButton } from "../../Components/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import {
	toggleModal,
	prevStep,
	addImage,
} from "../../Features/PostsModal/postsModalSlice";
import { useEffect, useState } from "react";
import { postAdded } from "../../Features/Posts/postsSlice";

export const Step2 = () => {
	const { currentUser } = useAuth();
	const userName = currentUser.attributes.given_name;

	const [imageFiles, setImageFiles] = useState([]);

	const images = useSelector((state) => state.postsModal.images);
	const currentMood = useSelector((state) => state.postsModal.currentMood);

	const dispatch = useDispatch();

	const onImageChange = (e) => setImageFiles([...e.target.files]);

	const [description, setDescription] = useState("");

	const onDescriptionChanged = (e) => setDescription(e.target.value);

	const onAddPostClicked = () => {
		if (!description) return;
		dispatch(postAdded(currentMood.mood, "data", "", description, "imgpath"));
	};

	useEffect(() => {
		if (imageFiles.length <= 0) return;

		imageFiles.forEach((image) => {
			const imageURL = URL.createObjectURL(image);
			dispatch(addImage(imageURL));
		});
	}, [imageFiles]);

	const renderedImages = images.map((imageSrc) => (
		<div key={imageSrc.URL} className="max-w-sm">
			<img
				src={imageSrc.URL}
				alt="Something went wrong with your file"
				className="rounded-xl"
			/>
		</div>
	));

	return (
		<ModalContainer padding="pl-28 pr-12">
			<div className="mb-16">
				<h1 className="text-4xl font-semibold">
					{userName},
					<span className=" text-base font-normal">
						{" "}
						is feeling {currentMood.mood}
					</span>
				</h1>
			</div>

			<p className="my-8">2. Insert your post</p>

			<button
				className="absolute right-16 top-10"
				onClick={() => dispatch(toggleModal())}
			>
				Close
			</button>

			<div className="flex gap-4">
				<InsertImageButton onImageChange={onImageChange} />
				<InsertTextButton />
				<InsertVideoButton />
			</div>

			{images[0] && (
				<section className="mt-6 flex items-start gap-4">
					<div className="grid">{renderedImages}</div>
					<form className="flex flex-col items-start gap-4">
						<textarea
							className="focus:shadow-outline w-full resize-y appearance-none rounded-md bg-neutral py-3 px-3 text-sm font-extralight leading-tight text-gray-500 placeholder-neutralDark"
							placeholder="add a description"
							value={description}
							onChange={onDescriptionChanged}
						></textarea>
						<PrimaryButton onClick={onAddPostClicked}>Add post</PrimaryButton>
					</form>
				</section>
			)}

			<PreviousStepButton onClick={() => dispatch(prevStep())} />
		</ModalContainer>
	);
};
