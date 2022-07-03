export const Backdrop = ({ children, ...props }) => {
	return (
		<div
			{...props}
			className="fixed top-0 left-0 z-20 grid h-screen w-full place-items-center overflow-auto bg-[#000000e1] p-8"
		>
			{children}
		</div>
	);
};
