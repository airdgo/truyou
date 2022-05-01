import {
	SidebarLogout,
	ProfileIconExtended,
	SidebarData,
	LogoIcon,
} from "./SidebarData";
import { useSidebar } from "../Dashboard/Dashboard";

export const ExtendedSidebar = () => {
	const { toggleSidebar } = useSidebar();
	return (
		<nav
			onClick={toggleSidebar}
			className="bg-white flex flex-col items-start min-h-screen justify-between py-6 top-0 left-0 fixed w-[14rem] pl-[1.33rem] pr-2"
		>
			<ul className="flex flex-col items-start gap-6 font-card text-primary text-xl w-full">
				<LogoIcon />
				{SidebarData.map((data, index) => {
					return (
						<li key={index}>
							<div className="flex items-center gap-2 cursor-pointer max-w-max">
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
			<ul className="flex flex-col items-start gap-8">
				<ProfileIconExtended />
				<SidebarLogout />
			</ul>
		</nav>
	);
};
