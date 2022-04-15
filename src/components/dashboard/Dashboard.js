import { Bucketlist } from "./Bucketlist";
import { LeftNavbar } from "./LeftNavbar";
import { MoodAndPosts } from "./MoodAndPosts";
import { TopNavbar } from "./TopNavbar";

export const Dashboard = () => {
	return (
		<div className="bg-background min-h-screen relative overflow-auto pt-20 pl-20 pb-4 pr-[17rem]">
			<TopNavbar />
			<LeftNavbar />
			<MoodAndPosts />
			<Bucketlist />
		</div>
	);
};
