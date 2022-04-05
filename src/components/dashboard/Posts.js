import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { PrimaryButton } from "../PrimaryButton";
import { FiLayers } from "react-icons/fi";
import { BiGridAlt } from "react-icons/bi";

export const Posts = () => {
	return (
		<div className="bg-white rounded-md p-5 font-card font-normal shadow-xl">
			<div className="flex flex-col gap-8">
				<div className="text-neutralDark flex justify-between items-center">
					<div className="text-xs">Posts</div>
					<HiOutlineDotsHorizontal className="text-xl cursor-pointer" />
				</div>
				<div className="flex items-center justify-between">
					<div className="flex gap-4">
						<PrimaryButton bgColor="bg-accent">Add new post</PrimaryButton>
						<PrimaryButton bgColor="bg-accent">Add new friend</PrimaryButton>
					</div>
					<div className="flex text-xl text-neutralDark gap-3">
						<div className="bg-neutral p-1 rounded-md cursor-pointer">
							<BiGridAlt />
						</div>
						<div className="bg-neutral p-1 rounded-md cursor-pointer">
							<FiLayers />
						</div>
					</div>
				</div>
			</div>
			<div>Posts content</div>
		</div>
	);
};
