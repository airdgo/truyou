import { SidebarData } from "./SidebarData";
import { FiLogOut } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import { useAuth } from "../authentication/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SideBar = () => {
	const { extendSidebar, setExtendSidebar } = useState(true);
	const { logout } = useAuth();
	const navigate = useNavigate();
	console.log(!extendSidebar);

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
		<nav className="bg-white flex flex-col items-center min-h-screen justify-between py-6 top-0 left-0 fixed w-[15rem]">
			<ul className="flex flex-col items-center gap-6">
				<li className="text-black text-2xl">
					<FaCircle />
				</li>
				{!!extendSidebar
					? SidebarData.map((data, index) => {
							return (
								<li key={index} className="text-primary text-xl cursor-pointer">
									{data.icon}
								</li>
							);
					  })
					: SidebarData.map((data, index) => {
							return (
								<li key={index} className="text-primary cursor-pointer">
									<span className="text-xl">{data.icon}</span>
									<p className="text-xs">{data.name}</p>
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
