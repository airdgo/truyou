import { Backdrop } from "./Backdrop";
import { createPortal } from "react-dom";
import { useAuth } from "../authentication/AuthProvider";
import { NextStepIcon } from "../../icons/MoodsAndPostsIcons/NextStepIcon";
import { useState } from "react";

export const Modal = ({ handleClose, modalOpen }) => {
	const { currentUser } = useAuth();
	const userName = currentUser.attributes.given_name;

	const [moods, setMoods] = useState([
		{
			id: 0,
			mood: "happy",
			isSelected: false,
		},
		{
			id: 1,
			mood: "sad",
			isSelected: false,
		},
		{
			id: 2,
			mood: "angry",
			isSelected: false,
		},
		{
			id: 3,
			mood: "scared",
			isSelected: false,
		},
		{
			id: 4,
			mood: "surprised",
			isSelected: false,
		},
		{
			id: 5,
			mood: "disgusted",
			isSelected: false,
		},
	]);

	const handleSelectedMood = (id) => {
		const newMoods = moods.map((mood) => {
			return mood.id === id
				? { ...mood, isSelected: !mood.isSelected }
				: mood.isSelected
				? { ...mood, isSelected: !mood.isSelected }
				: mood;
		});

		setMoods(newMoods);
	};

	return createPortal(
		<Backdrop onClick={handleClose}>
			<div
				onClick={(e) => e.stopPropagation()}
				className="relative w-full max-w-6xl rounded bg-white py-24 px-12 font-card text-primary"
			>
				<div className="mb-12">
					<h1 className="text-4xl font-semibold">{userName},</h1>
					<p className="mt-2">How are you feeling today?</p>
				</div>
				<p className="my-8">1. Please, choose your mood</p>
				<ul className="flex gap-8">
					{moods.map((mood) => {
						const selectedStyle = mood.isSelected
							? "bg-accent text-white"
							: "bg-background";
						const className =
							"cursor-pointer rounded px-4 py-2 " + selectedStyle;

						return (
							<li
								key={mood.id}
								className={className}
								onClick={() => handleSelectedMood(mood.id)}
							>
								{mood.mood}
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
