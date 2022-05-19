import { DashboardContainer } from "./DashboardContainer";
import { Bucketlist } from "../Bucketlist/Bucketlist";
import { Sidebar } from "../../features/sidebar/Sidebar";
import { MoodAndPosts } from "../Moods-and-posts/MoodAndPosts";
import { Navbar } from "../Navbar/Navbar";

export const Dashboard = () => {
	return (
		<DashboardContainer>
			<Navbar />
			<Sidebar />
			<MoodAndPosts />
			<Bucketlist />
		</DashboardContainer>
	);
};
