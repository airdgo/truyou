import { Section } from "../Section";
import { PrimaryButton } from "../PrimaryButton";
import { MakeWishSmallIcon } from "../../Icons/BucketlistIcons/MakeWishSmallIcon";

export const ExtendedBucketlist = () => {
	return (
		<Section className="fixed right-0 top-0 bottom-0 mr-4 mb-4 mt-20 h-auto w-60">
			<header className="flex items-center justify-between">
				<p className="text-2xs text-neutralDark">My Bucket list</p>
				<button className="rounded-full bg-neutral p-1">
					<MakeWishSmallIcon />
				</button>
			</header>

			<div className="mt-4 flex flex-col items-center gap-4">
				<div className="h-32 w-32 rounded-full bg-neutral"></div>
				<p className="mb-4 text-center text-sm font-light text-neutralDarker">
					You don't have anything on your bucket list!
				</p>
				<PrimaryButton bgColor="bg-accent">Add a wish</PrimaryButton>
			</div>
		</Section>
	);
};
