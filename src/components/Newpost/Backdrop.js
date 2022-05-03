export const Backdrop = ({ children, onClick }) => {
	return (
		<div
			onClick={onClick}
			className="fixed top-0 left-0 grid h-screen w-full place-items-center bg-[#000000e1]"
		>
			{children}
		</div>
	);
};
