import { ModalContainer } from "./ModalContainer";
import { NextStepButton } from "./Buttons/NextStepButton";
import { InsertImageButton } from "./Buttons/InsertImageButton";
import { InsertTextButton } from "./Buttons/InsertTextButton";
import { InsertVideoButton } from "./Buttons/InsertVideoButton";
import { useAuth } from "../authentication/AuthProvider";
import { PreviousStepButton } from "./Buttons/PreviousStepButton";
import { useModal } from "./Modal";

export const Step2 = ({ handleClose }) => {
	const { currentUser } = useAuth();
	const userName = currentUser.attributes.given_name;
	const { nextStep, previousStep, currentMood, imagesURLs, onImageChange } =
		useModal();

	return (
		<ModalContainer padding="pl-28 pr-12">
			<div className="mb-16">
				<h1 className="text-4xl font-semibold">
					{userName},
					<span className=" text-base font-normal">
						{" "}
						is feeling {currentMood}
					</span>
				</h1>
			</div>

			<p className="my-8">2. Insert your post</p>

			<button className="absolute right-16 top-10" onClick={handleClose}>
				Close
			</button>

			<div className="flex gap-4">
				<InsertImageButton onImageChange={onImageChange} />
				<InsertTextButton />
				<InsertVideoButton />
			</div>

			<div className="mt-6 grid">
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

			<PreviousStepButton onClick={() => previousStep()} />
			<NextStepButton onClick={() => nextStep()} />
		</ModalContainer>
	);
};
