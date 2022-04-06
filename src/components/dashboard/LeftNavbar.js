import { FiUser } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiFolder } from "react-icons/fi";
import { RiBitCoinLine } from "react-icons/ri";
import { RiFileListLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import { useAuth } from "../authentication/AuthProvider";
import { useNavigate } from "react-router-dom";

export const LeftNavbar = () => {
	const icons = [
		<FiUser />,
		<FiUsers />,
		<RiFileListLine />,
		<FiFolder />,
		<RiBitCoinLine />,
	];

	const { logout } = useAuth();
	const navigate = useNavigate();

	async function handleLogout(data) {
		try {
			await logout();
			navigate("/login");
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<nav className="bg-white flex flex-col items-center min-h-screen justify-between py-6 row-span-full">
			<ul className="flex flex-col items-center gap-6">
				<li className="text-black text-2xl">
					<FaCircle />
				</li>
				{icons.map((icon, index) => {
					return (
						<li key={index} className="text-primary text-xl cursor-pointer">
							{icon}
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
