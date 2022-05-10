import { useModal } from "./Modal";

export const ChooseMood = () => {
	const { moods, handleSelectedMood } = useModal();

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
