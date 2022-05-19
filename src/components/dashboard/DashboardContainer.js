import { useSelector } from "react-redux";

export const DashboardContainer = ({ children }) => {
	const sidebarExtended = useSelector((state) => state.sidebar.extended);

	const padding = sidebarExtended ? "pl-[15rem] pr-32" : "pl-20 pr-[17rem]";
	const className =
		"bg-background min-h-screen relative overflow-auto pt-20 pb-4 " + padding;

	return <div className={className}>{children}</div>;
};
