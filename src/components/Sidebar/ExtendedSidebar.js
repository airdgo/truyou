import { LogoutIcon, ProfileIcon, SidebarData } from "./SidebarData";
import { useSidebar } from "./Sidebar";

export const ExtendedSidebar = () => {
	const { toggleSidebar } = useSidebar();
	return (
		<nav
			onClick={toggleSidebar}
			className="bg-white flex flex-col items-start min-h-screen justify-between py-6 top-0 left-0 fixed w-[15rem] pl-[1.33rem]"
		>
			<ul className="flex flex-col items-start gap-6 font-card text-primary text-xl">
				{SidebarData.map((data, index) => {
					return (
						<li key={index} className={data.className && data.className}>
							<div className="flex items-center gap-2 cursor-pointer">
								<span>{data.icon}</span>
								<p className="text-xs">{data.name}</p>
							</div>

							{data.secondLevel &&
								data.secondLevel.map((secondLevelData, index) => {
									return (
										<div
											key={index}
											className="flex items-center gap-2 ml-4 my-2 cursor-pointer"
										>
											<span>{secondLevelData.icon}</span>
											<p className="text-xs">{secondLevelData.name}</p>
										</div>
									);
								})}
						</li>
					);
				})}
			</ul>
			<ul className="flex flex-col items-center gap-8">
				<ProfileIcon />
				<LogoutIcon />
			</ul>
		</nav>
	);
};
