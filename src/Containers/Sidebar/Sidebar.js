import { CompresssedSidebar } from "./CompressedSidebar";
import { ExtendedSidebar } from "./ExtendedSidebar";
import { useSelector } from "react-redux";

export const Sidebar = () => {
	const sidebarExtended = useSelector((state) => state.sidebar.extended);

	return sidebarExtended ? <ExtendedSidebar /> : <CompresssedSidebar />;
};
