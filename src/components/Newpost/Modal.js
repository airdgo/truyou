import { Backdrop } from "./Backdrop";
import { createPortal } from "react-dom";
import { useAuth } from "../authentication/AuthProvider";
import { NextStepIcon } from "../../icons/MoodsAndPostsIcons/NextStepIcon";

export const Modal = ({ handleClose, modalOpen }) => {
	const { currentUser } = useAuth();
	const userName = currentUser.attributes.given_name;

	const moods = ["happy", "sad", "angry", "scared", "surprised", "disgusted"];

	return createPortal(
		<Backdrop onClick={handleClose}>
			<div
				onClick={(e) => e.stopPropagation()}
				className=" relative w-full max-w-6xl bg-white py-24 px-12 font-card text-primary"
			>
				<div className="mb-12">
					<h1 className="text-4xl font-semibold">{userName},</h1>
					<p className="mt-2">How are you feeling today?</p>
				</div>
				<p className="my-8">1. Please, choose your mood</p>
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
				<button className="absolute right-16 top-10" onClick={handleClose}>
					Close
				</button>
				<NextStepIcon className="absolute bottom-44 right-16 cursor-pointer fill-neutral stroke-neutralDark hover:fill-accent hover:stroke-white" />
			</div>
		</Backdrop>,
		document.getElementById("portal")
	);
};
