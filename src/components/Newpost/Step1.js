import { ModalContainer } from "./ModalContainer";
import { ChooseMood } from "./ChooseMood";
import { NextStepButton } from "./Buttons/NextStepButton";
import { useAuth } from "../authentication/AuthProvider";
import { useModal } from "./Modal";
import { useDispatch } from "react-redux";
import { toggleModal } from "./postsSlice";

export const Step1 = () => {
	const { currentUser } = useAuth();
	const userName = currentUser.attributes.given_name;
	const { nextStep, currentMood } = useModal();
	const isDisabled = currentMood.length === 0 ? true : false;
	const dispatch = useDispatch();

	return (
		<ModalContainer>
			<div className="mb-12">
				<h1 className="text-4xl font-semibold">{userName},</h1>
				<p className="mt-2">How are you feeling today?</p>
			</div>

			<p className="my-8">1. Please, choose your mood</p>

			<ChooseMood />

			<button
				className="absolute right-16 top-10"
				onClick={() => dispatch(toggleModal())}
			>
				Close
			</button>
			<NextStepButton disabled={isDisabled} onClick={() => nextStep()} />
		</ModalContainer>
	);
};
