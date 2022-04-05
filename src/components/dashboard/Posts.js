import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { PrimaryButton } from "../PrimaryButton";

export const Posts = () => {
	return (
		<div className="bg-green-800 rounded-md p-5 font-card font-normal">
			<div>
				<div className="text-neutralDark flex justify-between items-center">
					<div className="text-xs">Posts</div>
					<HiOutlineDotsHorizontal className="text-xl" />
				</div>
				<div>
					<PrimaryButton>Add new post</PrimaryButton>
					<PrimaryButton>Add new friend</PrimaryButton> icons
				</div>
			</div>
			<div>Posts content</div>
		</div>
	);
};
