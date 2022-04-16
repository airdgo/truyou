import { Bucketlist } from "./Bucketlist";
import { SideBar } from "./SideBar";
import { MoodAndPosts } from "./MoodAndPosts";
import { Navbar } from "./Navbar";

export const Dashboard = () => {
	return (
		<div className="bg-background min-h-screen relative overflow-auto pt-20 pl-20 pb-4 pr-[17rem]">
			<Navbar />
			<SideBar />
			<MoodAndPosts />
			<Bucketlist />
		</div>
	);
};
