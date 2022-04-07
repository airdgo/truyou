import { Section } from "./Section";
import { AiOutlinePlus } from "react-icons/ai";
import { PrimaryButton } from "../PrimaryButton";

export const Bucketlist = () => {
	return (
		<Section className={"my-4 mr-4"}>
			<header className="flex justify-between items-center">
				<p className="text-neutralDark text-xs">My Bucket list</p>
				<button className="bg-neutral rounded-full p-1">
					<AiOutlinePlus className="text-xl text-neutralDark" />
				</button>
			</header>

			<div className="flex flex-col items-center mt-4 gap-4">
				<div className="bg-neutral rounded-full w-32 h-32"></div>
				<p className="text-neutralDarker text-center font-light text-sm mb-4">
					You don't have anything on your bucket list!
				</p>
				<PrimaryButton bgColor="bg-accent">Add a wish</PrimaryButton>
			</div>
		</Section>
	);
};
