import {
	SidebarLogout,
	ProfileIconCompressed,
	SidebarData,
} from "./SidebarData";
import { useSidebar } from "./Sidebar";

export const CompresssedSidebar = () => {
	const { toggleSidebar } = useSidebar();

	return (
		<nav
			onClick={toggleSidebar}
			className="bg-white flex flex-col items-center min-h-screen justify-between py-6 top-0 left-0 fixed w-[4rem]"
		>
			<ul className="flex flex-col items-center gap-6">
				{SidebarData.map((data, index) => {
					return (
						<li
							key={index}
							className={
								data.className
									? data.className
									: "text-primary text-xl cursor-pointer"
							}
						>
							<span>{data.icon}</span>
						</li>
					);
				})}
			</ul>
			<ul className="flex flex-col items-center gap-8">
				<ProfileIconCompressed />
				<SidebarLogout />
			</ul>
		</nav>
	);
};
