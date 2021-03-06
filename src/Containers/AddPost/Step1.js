import { ModalContainer } from "./ModalContainer";
import { ChooseMood } from "./ChooseMood";
import { NextStepButton } from "../../Components/NextStepButton";
import { useAuth } from "../../Authentication/AuthProvider";
import { useDispatch, useSelector } from "react-redux";
import {
	toggleModal,
	nextStep,
} from "../../Features/PostsModal/postsModalSlice";

export const Step1 = () => {
	const { currentUser } = useAuth();
	const userName = currentUser.attributes.given_name;
	const postsModal = useSelector((state) => state.postsModal);
	const dispatch = useDispatch();
	const isDisabled = postsModal.currentMood.isSelected ? false : true;

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
			<NextStepButton
				disabled={isDisabled}
				onClick={() => dispatch(nextStep())}
			/>
		</ModalContainer>
	);
};
