import { LogoutIcon, ProfileIcon, SidebarData } from "./SidebarData";

export const ExtendedSidebar = ({ handleLogout }) => {
	return (
		<nav className="bg-white flex flex-col items-center min-h-screen justify-between py-6 top-0 left-0 fixed w-[15rem]">
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
							<p className="text-xs">{data.name}</p>
						</li>
					);
				})}
			</ul>
			<ul className="flex flex-col items-center gap-8">
				<ProfileIcon />
				<LogoutIcon onClick={handleLogout} />
			</ul>
		</nav>
	);
};
