import { Backdrop } from "./Backdrop";
import { ModalContainer } from "./ModalContainer";
import { ChooseMood } from "./ChooseMood";
import { createPortal } from "react-dom";
import { useAuth } from "../authentication/AuthProvider";
import { NextStepIcon } from "../../icons/MoodsAndPostsIcons/NextStepIcon";

export const Modal = ({ handleClose, modalOpen }) => {
	const { currentUser } = useAuth();
	const userName = currentUser.attributes.given_name;

	return createPortal(
		<Backdrop onClick={handleClose}>
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

				<NextStepIcon className="cursor-pointer fill-neutral stroke-neutralDark hover:fill-accent hover:stroke-white" />
			</ModalContainer>
		</Backdrop>,
		document.getElementById("portal")
	);
};
