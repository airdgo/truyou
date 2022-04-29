import { Section } from "./Section";
import { AiOutlinePlus } from "react-icons/ai";
import { PrimaryButton } from "../PrimaryButton";
import { useSidebar } from "../dashboard/Dashboard";

export const Bucketlist = () => {
	const { sidebarExtended } = useSidebar();

	const width = sidebarExtended ? "w-28" : "w-60";
	const className =
		"mr-4 h-auto fixed right-0 top-0 bottom-0 mb-4 mt-20 " + width;

	return (
		<Section className={className}>
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
