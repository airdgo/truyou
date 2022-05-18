import { ModalContainer } from "./ModalContainer";
import { InsertImageButton } from "./Buttons/InsertImageButton";
import { InsertTextButton } from "./Buttons/InsertTextButton";
import { InsertVideoButton } from "./Buttons/InsertVideoButton";
import { useAuth } from "../authentication/AuthProvider";
import { PreviousStepButton } from "./Buttons/PreviousStepButton";
import { useModal } from "./Modal";
import { PrimaryButton } from "../PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal, prevStep } from "./postsSlice";

export const Step2 = () => {
	const { currentUser } = useAuth();
	const userName = currentUser.attributes.given_name;
	const { imagesURLs, onImageChange } = useModal();
	const currentMood = useSelector((state) => state.posts.currentMood);
	const dispatch = useDispatch();

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

			{imagesURLs[0] && (
				<section className="mt-6 flex items-start gap-4">
					<div className="grid">
						{imagesURLs.map((imageSrc) => (
							<div className="max-w-sm">
								<img
									src={imageSrc}
									alt="Something went wrong with your file"
									className="rounded-xl"
								/>
							</div>
						))}
					</div>
					<form className="flex flex-col items-start gap-4">
						<textarea
							className="focus:shadow-outline w-full resize-y appearance-none rounded-md bg-neutral py-3 px-3 text-sm font-extralight leading-tight text-gray-500 placeholder-neutralDark outline-none focus:outline-none"
							placeholder="add a description"
						></textarea>
						<PrimaryButton>Add post</PrimaryButton>
					</form>
				</section>
			)}

			<PreviousStepButton onClick={() => dispatch(prevStep())} />
		</ModalContainer>
	);
};
