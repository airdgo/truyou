import { NextStepIcon } from "../../../icons/MoodsAndPostsIcons/NextStepIcon";

export const NextStepButton = () => {
	return (
		<button className="absolute bottom-44 right-16">
			<NextStepIcon className="cursor-pointer fill-neutral stroke-neutralDark hover:fill-accent hover:stroke-white" />
		</button>
	);
};
