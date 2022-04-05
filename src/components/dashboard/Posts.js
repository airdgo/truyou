import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FormButton } from "../authentication/form-components/FormButton";

export const Posts = () => {
	return (
		<div className="bg-green-800 rounded-md p-5 font-card font-normal">
			<div>
				<div className="text-neutralDark flex justify-between items-center">
					<div className="text-xs">Posts</div>
					<HiOutlineDotsHorizontal className="text-xl" />
				</div>
				<div>
					<FormButton>Add new post</FormButton>
					<FormButton>Add new friend</FormButton> icons
				</div>
			</div>
			<div>Posts content</div>
		</div>
	);
};
