import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { PrimaryButton } from "../PrimaryButton";
import { FiLayers } from "react-icons/fi";
import { BiGridAlt } from "react-icons/bi";
import { useAuth } from "../authentication/AuthProvider";
import { ImageIcon } from "../../icons/ImageIcon";
import { Section } from "./Section";

export const Posts = () => {
	const { currentUser } = useAuth();

	return (
		<Section>
			<header className="flex flex-col gap-8">
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
			</header>

			<div className="flex items-center justify-center min-h-[80%] text-center text-neutralDarker flex-col  gap-6">
				<ImageIcon />
				<span className="font-bold text-xl">
					Hello, {currentUser.attributes.given_name}!
				</span>
				<p className="font-normal text-sm max-w-xs">
					There's no posts here yet. Start posting so you can keep your
					memories.
				</p>
			</div>
		</Section>
	);
};
