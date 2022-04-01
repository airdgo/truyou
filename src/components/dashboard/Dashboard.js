import { Bucketlist } from "./Bucketlist";
import { LeftNavbar } from "./LeftNavbar";
import { MoodAndPosts } from "./MoodAndPosts";
import { TopNavbar } from "./TopNavbar";

export const Dashboard = () => {
	return (
		<div className="bg-background min-h-screen grid grid-cols-[4rem_auto_15rem] grid-rows-[5rem_1fr]">
			<LeftNavbar />
			<TopNavbar />
			<MoodAndPosts />
			<Bucketlist />
		</div>
	);
};
