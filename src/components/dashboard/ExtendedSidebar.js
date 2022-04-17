import { SidebarData } from "./SidebarData";

export const ExtendedSidebar = () => {
	return (
		<nav className="bg-white flex flex-col items-center min-h-screen justify-between py-6 top-0 left-0 fixed w-[15rem]">
			<ul className="flex flex-col items-center gap-6">
				<li className="text-black text-2xl">
					<FaCircle />
				</li>
				{SidebarData.map((data, index) => {
					return (
						<li key={index} className="text-primary text-xl cursor-pointer">
							{data.icon}
						</li>
					);
				})}
			</ul>
			<ul className="flex flex-col items-center gap-8">
				<li className="text-black text-2xl">
					<FaCircle />
				</li>
				<li
					className="text-primary text-xl cursor-pointer"
					onClick={handleLogout}
				>
					<FiLogOut />
				</li>
			</ul>
		</nav>
	);
};
