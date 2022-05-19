import { useDispatch } from "react-redux";
import { toggleModal } from "./postsSlice";

export const Backdrop = ({ children }) => {
	const dispatch = useDispatch();

	return (
		<div
			onClick={() => dispatch(toggleModal())}
			className="fixed top-0 left-0 grid h-screen w-full place-items-center overflow-auto bg-[#000000e1] p-8"
		>
			{children}
		</div>
	);
};
