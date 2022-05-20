import { Section } from "../../Components/Section";
import { MakeWishIcon } from "../../Icons/BucketlistIcons/MakeWishIcon";

export const CompressedBucketlist = () => {
	return (
		<Section className="fixed right-0 top-0 bottom-0 mr-4 mb-4 mt-20 h-auto w-24 px-0">
			<header className="flex items-center">
				<p className="w-full text-center text-2xs text-neutralDark">
					My Bucket list
				</p>
			</header>

			<div className="mt-10 flex flex-col items-center gap-4">
				<MakeWishIcon />
				<p className="mb-4 text-center text-sm font-light text-primary">
					Make a new wish
				</p>
			</div>
		</Section>
	);
};
