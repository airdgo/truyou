import { Backdrop } from "./Backdrop";
import { Step1 } from "./Step1";
import { createPortal } from "react-dom";
import { Step2 } from "./Step2";

export const Modal = ({ handleClose, modalOpen }) => {
	return createPortal(
		<Backdrop onClick={handleClose}>
			{/* <Step1 handleClose={handleClose} /> */}
			<Step2 handleClose={handleClose} />
		</Backdrop>,
		document.getElementById("portal")
	);
};
