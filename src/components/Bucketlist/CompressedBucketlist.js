import { Section } from "../Section";
import { MakeWishIcon } from "../../icons/BucketlistIcons/MakeWishIcon";

export const CompressedBucketlist = () => {
	return (
		<Section className="mr-4 h-auto fixed right-0 top-0 bottom-0 mb-4 mt-20 w-24 px-0">
			<header className="flex items-center">
				<p className="text-neutralDark text-2xs text-center w-full">
					My Bucket list
				</p>
			</header>

			<div className="flex flex-col items-center mt-10 gap-4">
				<MakeWishIcon />
				<p className="text-primary text-center font-light text-sm mb-4">
					Make a new wish
				</p>
			</div>
		</Section>
	);
};
