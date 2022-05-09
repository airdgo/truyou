import { Backdrop } from "./Backdrop";
import { Step1 } from "./Step1";
import { createPortal } from "react-dom";
import { Step2 } from "./Step2";
import { useState } from "react";
import { useContext, createContext } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const Modal = ({ handleClose, modalOpen }) => {
	const [step, setStep] = useState(0);

	const currentStep =
		step === 0 ? (
			<Step1 handleClose={handleClose} />
		) : (
			<Step2 handleClose={handleClose} />
		);

	const nextStep = () => setStep((currStep) => currStep + 1);
	const previousStep = () => setStep((currStep) => currStep - 1);

	const value = { step, nextStep, previousStep };

	return createPortal(
		<ModalContext.Provider value={value}>
			<Backdrop onClick={handleClose}>{currentStep}</Backdrop>
		</ModalContext.Provider>,
		document.getElementById("portal")
	);
};
