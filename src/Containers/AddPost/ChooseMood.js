import { selectMood } from "../../Features/Posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";

export const ChooseMood = () => {
	const moods = useSelector((state) => state.posts.moods);
	const dispatch = useDispatch();

	const Moods = moods.map((mood) => {
		const selectedStyle = mood.isSelected
			? "bg-accent text-white"
			: "bg-background";
		const className = "cursor-pointer rounded px-4 py-2 " + selectedStyle;

		return (
			<li key={mood.id} onClick={() => dispatch(selectMood(mood.id))}>
				<button className={className}>{mood.mood}</button>
			</li>
		);
	});

	return <ul className="flex gap-8">{Moods}</ul>;
};
