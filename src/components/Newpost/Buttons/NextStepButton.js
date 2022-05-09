import { ChangeStepIcon } from "../../../icons/MoodsAndPostsIcons/ChangeStepIcon";

export const NextStepButton = () => {
	return (
		<button className="absolute bottom-44 right-16">
			<ChangeStepIcon className="cursor-pointer fill-neutral stroke-neutralDark hover:fill-accent hover:stroke-white" />
		</button>
	);
};