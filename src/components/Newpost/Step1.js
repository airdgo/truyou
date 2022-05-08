import { ModalContainer } from "./ModalContainer";
import { ChooseMood } from "./ChooseMood";
import { NextStepButton } from "./NextStepButton";
import { useAuth } from "../authentication/AuthProvider";

export const Step1 = ({ handleClose }) => {
	const { currentUser } = useAuth();
	const userName = currentUser.attributes.given_name;

	return (
		<ModalContainer>
			<div className="mb-12">
				<h1 className="text-4xl font-semibold">{userName},</h1>
				<p className="mt-2">How are you feeling today?</p>
			</div>

			<p className="my-8">1. Please, choose your mood</p>

			<ChooseMood />

			<button className="absolute right-16 top-10" onClick={handleClose}>
				Close
			</button>
			<NextStepButton />
		</ModalContainer>
	);
};
