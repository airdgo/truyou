import { Backdrop } from "./Backdrop";
import { Step1 } from "./Step1";
import { createPortal } from "react-dom";

export const Modal = ({ handleClose, modalOpen }) => {
	return createPortal(
		<Backdrop onClick={handleClose}>
			<Step1 handleClose={handleClose} />
		</Backdrop>,
		document.getElementById("portal")
	);
};
