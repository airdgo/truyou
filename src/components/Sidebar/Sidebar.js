import { SidebarData } from "./SidebarData";
import { useAuth } from "../authentication/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ProfileIcon } from "./SidebarData";
import { LogoutIcon } from "./SidebarData";

export const SideBar = () => {
	const [extendSidebar, setExtendSidebar] = useState(false);
	const { logout } = useAuth();
	const navigate = useNavigate();
	const sidebarWidth = extendSidebar ? "w-[15rem]" : "w-16";

	function toggleSidebar() {
		setExtendSidebar((prevState) => !prevState);
	}

	async function handleLogout() {
		try {
			await logout();
			navigate("/login");
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<nav
			className={
				"bg-white flex flex-col items-center min-h-screen justify-between py-6 top-0 left-0 fixed " +
				sidebarWidth
			}
			onClick={toggleSidebar}
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
							{extendSidebar && <p className="text-xs">{data.name}</p>}
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
