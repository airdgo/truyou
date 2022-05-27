import {
	SidebarLogout,
	ProfileIconExtended,
	SidebarData,
	LogoIcon,
} from "../../Features/Sidebar/SidebarData";
import { toggleSidebar } from "../../Features/Sidebar/sidebarSlice";
import { useDispatch } from "react-redux";

export const ExtendedSidebar = () => {
	const dispatch = useDispatch();

	return (
		<nav
			onClick={() => dispatch(toggleSidebar())}
			className="fixed top-0 left-0 z-20 flex min-h-screen w-[14rem] flex-col items-start justify-between bg-white py-6 pl-[1.33rem] pr-2"
		>
			<ul className="flex w-full flex-col items-start gap-6 font-card text-xl text-primary">
				<LogoIcon />
				{SidebarData.map((data, index) => {
					return (
						<li key={index}>
							<div className="flex max-w-max cursor-pointer items-center gap-2">
								<span>{data.icon}</span>
								<p className="text-xs">{data.name}</p>
							</div>

							{data.secondLevel &&
								data.secondLevel.map((secondLevelData, index) => {
									return (
										<div
											key={index}
											className="my-2 ml-4 flex cursor-pointer items-center gap-2"
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
