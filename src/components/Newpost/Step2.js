import { ModalContainer } from "./ModalContainer";
import { NextStepButton } from "./Buttons/NextStepButton";
import { InsertImageButton } from "./Buttons/InsertImageButton";
import { InsertTextButton } from "./Buttons/InsertTextButton";
import { InsertVideoButton } from "./Buttons/InsertVideoButton";
import { useAuth } from "../authentication/AuthProvider";

export const Step2 = ({ handleClose }) => {
	const { currentUser } = useAuth();
	const userName = currentUser.attributes.given_name;

	return (
		<ModalContainer>
			<div className="mb-12">
				<h1 className="text-4xl font-semibold">
					{userName},{" "}
					<span className=" text-base font-normal">is feeling surprised</span>
				</h1>
			</div>

			<p className="my-8">2. Insert your post</p>

			<button className="absolute right-16 top-10" onClick={handleClose}>
				Close
			</button>
			<div className="flex gap-4">
				<InsertImageButton />
				<InsertTextButton />
				<InsertVideoButton />
			</div>

			<NextStepButton />
		</ModalContainer>
	);
};
