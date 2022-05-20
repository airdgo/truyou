import {
	SidebarLogout,
	ProfileIconCompressed,
	SidebarData,
	LogoIcon,
} from "../../Features/Sidebar/SidebarData";
import { toggleSidebar } from "../../Features/Sidebar/sidebarSlice";
import { useDispatch } from "react-redux";

export const CompresssedSidebar = () => {
	const dispatch = useDispatch();

	return (
		<nav
			onClick={() => dispatch(toggleSidebar())}
			className="fixed top-0 left-0 flex min-h-screen w-[4rem] flex-col items-center justify-between bg-white py-6"
		>
			<ul className="flex flex-col items-center gap-6">
				<LogoIcon />
				{SidebarData.map((data, index) => {
					return (
						<li
							key={index}
							className={
								data.className
									? data.className
									: "cursor-pointer text-xl text-primary"
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
