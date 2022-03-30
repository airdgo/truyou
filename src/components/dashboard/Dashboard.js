import { LeftNavbar } from "./LeftNavbar";
import { TopNavbar } from "./TopNavbar";

export const Dashboard = () => {
	return (
		<div className="bg-background min-h-screen">
			<TopNavbar />
			<LeftNavbar />
		</div>
	);
};
