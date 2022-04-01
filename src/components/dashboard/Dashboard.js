import { LeftNavbar } from "./LeftNavbar";
import { TopNavbar } from "./TopNavbar";

export const Dashboard = () => {
	return (
		<div className="bg-background min-h-screen grid grid-cols-[4rem_auto_15rem] grid-rows-[5rem_1fr]">
			<LeftNavbar />
			{/* <div className=" bg-red-500 row-span-full">sidebard</div> */}
			<TopNavbar />
			{/* <div className=" bg-slate-500 col-span-2">navbar</div> */}
			<div className="bg-orange-500">changing</div>
			<div className="bg-purple-500 row-span-2">buckedlist</div>
		</div>
	);
};
