import { FiUser } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiFolder } from "react-icons/fi";
import { RiBitCoinLine } from "react-icons/ri";
import { RiFileListLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

export const LeftNavbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<FaCircle />
				</li>
				<li>
					<FiUser />
				</li>
				<li>
					<FiUsers />
				</li>
				<li>
					<RiFileListLine />
				</li>
				<li>
					<FiFolder />
				</li>
				<li>
					<RiBitCoinLine />
				</li>
			</ul>
			<ul>
				<li>
					<FaCircle />
				</li>
				<li>
					<FiLogOut />
				</li>
			</ul>
		</nav>
	);
};
