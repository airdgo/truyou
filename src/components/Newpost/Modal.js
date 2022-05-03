import { Backdrop } from "./Backdrop";
import { createPortal } from "react-dom";
import { useAuth } from "../authentication/AuthProvider";

export const Modal = ({ handleClose, modalOpen }) => {
	const { currentUser } = useAuth();
	const userName = currentUser.attributes.given_name;

	const moods = ["happy", "sad", "angry", "scared", "surprised", "disgusted"];

	return createPortal(
		<Backdrop onClick={handleClose}>
			<div
				onClick={(e) => e.stopPropagation()}
				className="bg-white py-12 px-12 font-card text-primary"
			>
				<div className="my-12">
					<h1 className="text-3xl font-semibold">{userName},</h1>
					<p className="mt-2">How are you feeling today?</p>
				</div>
				<p className="my-6">1. Please, choose your mood</p>
				<ul className="flex gap-8">
					{moods.map((mood, index) => {
						return (
							<li
								key={index}
								className="cursor-pointer rounded bg-background px-4 py-2"
							>
								{mood}
							</li>
						);
					})}
				</ul>
				<button onClick={handleClose}>Close</button>
			</div>
		</Backdrop>,
		document.getElementById("portal")
	);
};
