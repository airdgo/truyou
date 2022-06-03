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
	resetModal,
} from "../../Features/PostsModal/postsModalSlice";
import { useEffect, useRef, useState } from "react";
import { postAdded } from "../../Features/Posts/postsSlice";

export const Step2 = () => {
	const { currentUser } = useAuth();
	const userName = currentUser.attributes.given_name;

	const [showTextBox, setShowTextBox] = useState(false);
	const [imageFiles, setImageFiles] = useState([]);
	const descriptionRef = useRef();

	const postsModal = useSelector((state) => state.postsModal);
	const dispatch = useDispatch();

	const onImageChange = (e) => setImageFiles([...e.target.files]);

	const toggleTextBox = () => setShowTextBox((state) => !state);

	const onAddPostClicked = () => {
		if (!descriptionRef.current.value) return;
		dispatch(
			postAdded(
				postsModal.currentMood.mood,
				"",
				descriptionRef.current.value,
				postsModal.images
			)
		);
		dispatch(resetModal());
	};

	useEffect(() => {
		if (imageFiles.length <= 0) return;

		imageFiles.forEach((image) => {
			const imageURL = URL.createObjectURL(image);
			dispatch(addImage(imageURL));
		});
		setShowTextBox(true);
	}, [imageFiles]);

	const renderedImages = postsModal.images[0] && (
		<div className="grid max-w-lg grid-cols-3 gap-1">
			{postsModal.images.map((imageSrc) => (
				<div key={imageSrc.URL} className="h-full w-full first:col-span-3">
					<img
						src={imageSrc.URL}
						alt="Something went wrong with your file"
						className="h-full w-full rounded-xl object-cover"
					/>
				</div>
			))}
		</div>
	);

	return (
		<ModalContainer padding="pl-28 pr-12">
			<div className="mb-16">
				<h1 className="text-4xl font-semibold">
					{userName},
					<span className=" text-base font-normal">
						{" "}
						is feeling {postsModal.currentMood.mood}
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
				<InsertTextButton onClick={toggleTextBox} />
				<InsertVideoButton />
			</div>

			<form className="mt-6 flex items-start gap-4">
				{renderedImages}
				{showTextBox && (
					<div className="flex flex-col items-start gap-4">
						<textarea
							className="focus:shadow-outline w-full resize-y appearance-none rounded-md bg-neutral py-3 px-3 text-sm font-extralight leading-tight text-gray-500 placeholder-neutralDark"
							placeholder="add a description"
							ref={descriptionRef}
						></textarea>
						<PrimaryButton onClick={onAddPostClicked}>Add post</PrimaryButton>
					</div>
				)}
			</form>

			<PreviousStepButton onClick={() => dispatch(prevStep())} />
		</ModalContainer>
	);
};
