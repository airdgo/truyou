import { Backdrop } from "../../Components/Backdrop";
import { Step1 } from "./Step1";
import { createPortal } from "react-dom";
import { Step2 } from "./Step2";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../Features/PostsModal/postsModalSlice";

export const Modal = () => {
	const step = useSelector((state) => state.postsModal.modalStep);
	const dispatch = useDispatch();

	const currentStep = step === 0 ? <Step1 /> : <Step2 />;

	return createPortal(
		<Backdrop onClick={() => dispatch(toggleModal())}>{currentStep}</Backdrop>,
		document.getElementById("portal")
	);
};
