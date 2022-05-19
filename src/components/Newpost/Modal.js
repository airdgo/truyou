import { Backdrop } from "./Backdrop";
import { Step1 } from "./Step1";
import { createPortal } from "react-dom";
import { Step2 } from "./Step2";
import { useContext, createContext } from "react";
import { useSelector } from "react-redux";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const Modal = () => {
	const step = useSelector((state) => state.posts.modalStep);

	const currentStep = step === 0 ? <Step1 /> : <Step2 />;

	return createPortal(
		<Backdrop>{currentStep}</Backdrop>,
		document.getElementById("portal")
	);
};
