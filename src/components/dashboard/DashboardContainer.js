import { useSidebar } from "./Dashboard";

export const DashboardContainer = ({ children }) => {
	const { sidebarExtended } = useSidebar();

	const padding = sidebarExtended ? "pl-[15rem]" : "pl-20";
	const className =
		"bg-background min-h-screen relative overflow-auto pt-20 pb-4 pr-[17rem] " +
		padding;

	return <div className={className}>{children}</div>;
};
