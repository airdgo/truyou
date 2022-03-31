import { LeftNavbar } from "./LeftNavbar";
import { TopNavbar } from "./TopNavbar";

export const Dashboard = () => {
	return (
		<div
			className="bg-background min-h-screen grid"
			style={{
				gridTemplateAreas: `"sidebar navbar navbar"
									"sidebar header bucketlist"
									"sidebar posts bucketlist"`,
			}}
		>
			<div className=" bg-red-500" style={{ gridArea: "sidebar" }}>
				sidebard
			</div>
			<div className=" bg-slate-500" style={{ gridArea: "navbar" }}>
				navbar
			</div>
			<div className="bg-orange-500" style={{ gridArea: "header" }}>
				header
			</div>
			<div className="bg-purple-500" style={{ gridArea: "posts" }}>
				posts
			</div>
			<div className="bg-blue-500" style={{ gridArea: "bucketlist" }}>
				buckedlist
			</div>
			{/* <TopNavbar /> */}
			{/* <LeftNavbar /> */}
		</div>
	);
};
