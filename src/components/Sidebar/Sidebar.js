import { CompresssedSidebar } from "./CompressedSidebar";
import { ExtendedSidebar } from "./ExtendedSidebar";
import { useSidebar } from "../Dashboard/Dashboard";

export const SideBar = () => {
	const { sidebarExtended } = useSidebar();

	return sidebarExtended ? <ExtendedSidebar /> : <CompresssedSidebar />;
};
