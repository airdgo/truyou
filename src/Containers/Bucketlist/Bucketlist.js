import { useSelector } from "react-redux";
import { CompressedBucketlist } from "./CompressedBucketlist";
import { ExtendedBucketlist } from "./ExtendedBucketlist";

export const Bucketlist = () => {
	const sidebarExtended = useSelector((state) => state.sidebar.extended);

	return sidebarExtended ? <CompressedBucketlist /> : <ExtendedBucketlist />;
};
