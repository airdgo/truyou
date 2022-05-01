import { useSidebar } from "../Dashboard/Dashboard";
import { CompressedBucketlist } from "./CompressedBucketlist";
import { ExtendedBucketlist } from "./ExtendedBucketlist";

export const Bucketlist = () => {
	const { sidebarExtended } = useSidebar();

	return sidebarExtended ? <CompressedBucketlist /> : <ExtendedBucketlist />;
};
