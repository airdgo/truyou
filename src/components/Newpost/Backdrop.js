export const Backdrop = ({ children, onClick }) => {
	return (
		<div className="absolute top-0 left-0 h-full w-full bg-[#000000e1] flex items-center justify-center">
			{children}
		</div>
	);
};
