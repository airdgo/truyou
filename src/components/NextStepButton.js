import { ChangeStepIcon } from "../Icons/MoodsAndPostsIcons/ChangeStepIcon";

export const NextStepButton = ({ ...props }) => {
	return (
		<button className="absolute bottom-44 right-16" {...props}>
			<ChangeStepIcon className="cursor-pointer fill-neutral stroke-neutralDark hover:fill-accent hover:stroke-white" />
		</button>
	);
};
