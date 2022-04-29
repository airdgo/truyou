import { Section } from "../dashboard/Section";
import { AiOutlinePlus } from "react-icons/ai";
import { PrimaryButton } from "../PrimaryButton";
import { useSidebar } from "../dashboard/Dashboard";
import { CompressedBucketlist } from "../Bucketlist/CompressedBucketlist";
import { ExtendedBucketlist } from "../Bucketlist/ExtendedBucketlist";

export const Bucketlist = () => {
	const { sidebarExtended } = useSidebar();

	return sidebarExtended ? <CompressedBucketlist /> : <ExtendedBucketlist />;
};
