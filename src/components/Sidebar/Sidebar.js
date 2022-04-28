import { CompresssedSidebar } from "./CompressedSidebar";
import { ExtendedSidebar } from "./ExtendedSidebar";
import { useSidebar } from "../dashboard/Dashboard";

export const SideBar = () => {
	const { sidebarExtended } = useSidebar();

	return sidebarExtended ? <ExtendedSidebar /> : <CompresssedSidebar />;
};
