import { ChangeStepIcon } from "../../../icons/MoodsAndPostsIcons/ChangeStepIcon";

export const PreviousStepButton = ({ ...props }) => {
	return (
		<button className="absolute bottom-44 left-8 rotate-180" {...props}>
			<ChangeStepIcon className="cursor-pointer fill-neutral stroke-neutralDark hover:fill-accent hover:stroke-white" />
		</button>
	);
};
