import { useState } from "react";

export const ChooseMood = () => {
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

	return (
		<ul className="flex gap-8">
			{moods.map((mood) => {
				const selectedStyle = mood.isSelected
					? "bg-accent text-white"
					: "bg-background";
				const className = "cursor-pointer rounded px-4 py-2 " + selectedStyle;

				return (
					<li key={mood.id} onClick={() => handleSelectedMood(mood.id)}>
						<button className={className}>{mood.mood}</button>
					</li>
				);
			})}
		</ul>
	);
};
