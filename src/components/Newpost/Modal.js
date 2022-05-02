import { Backdrop } from "./Backdrop";
import { createPortal } from "react-dom";

export const Modal = ({ handleClose, modalOpen }) => {
	return createPortal(
		<Backdrop onClick={handleClose}>
			<div
				onClick={(e) => e.stopPropagation()}
				className="w-[30rem] h-[20rem] m-auto py-8 flex flex-col items-center bg-white"
			>
				<p>Add text</p>
				<button onClick={handleClose}>Close</button>
			</div>
		</Backdrop>,
		document.getElementById("portal")
	);
};
