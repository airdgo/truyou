import { useSidebar } from "../dashboard/Dashboard";
import { CompressedBucketlist } from "../Bucketlist/CompressedBucketlist";
import { ExtendedBucketlist } from "../Bucketlist/ExtendedBucketlist";

export const Bucketlist = () => {
	const { sidebarExtended } = useSidebar();

	return sidebarExtended ? <CompressedBucketlist /> : <ExtendedBucketlist />;
};
