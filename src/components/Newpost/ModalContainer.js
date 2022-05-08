export const ModalContainer = ({ children }) => {
	return (
		<div
			onClick={(e) => e.stopPropagation()}
			className="relative w-full max-w-6xl rounded bg-white py-24 px-12 font-card text-primary"
		>
			{children}
		</div>
	);
};
