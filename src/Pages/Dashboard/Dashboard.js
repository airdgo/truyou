import { DashboardContainer } from "./DashboardContainer";
import { Bucketlist } from "../../Containers/Bucketlist/Bucketlist";
import { Sidebar } from "../../Containers/Sidebar/Sidebar";
import { MoodAndPosts } from "../../Containers/MoodsAndPosts/MoodAndPosts";
import { Navbar } from "../../Containers/Navbar/Navbar";

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
