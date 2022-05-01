import { Backdrop } from "./Backdrop";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

export const Modal = ({ handleClose, modalOpen }) => {
	const modalRef = useRef();

	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			if (modalRef.current && !modalRef.current.contains(e.target))
				handleClose();
		};

		document.addEventListener("mousedown", checkIfClickedOutside);

		return () => {
			document.removeEventListener("mousedown", checkIfClickedOutside);
		};
	}, [modalOpen]);

	return createPortal(
		<Backdrop onClick={handleClose}>
			<div
				onClick={(e) => e.stopPropagation()}
				className="w-[30rem] h-[20rem] m-auto py-8 flex flex-col items-center bg-white"
				ref={modalRef}
			>
				<p>Add text</p>
				<button onClick={handleClose}>Close</button>
			</div>
		</Backdrop>,
		document.getElementById("portal")
	);
};
