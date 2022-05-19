export const ModalContainer = ({ children, padding = "px-12" }) => {
	const className =
		"relative w-full max-w-6xl rounded bg-white py-24 px-12 font-card text-primary " +
		padding;

	return (
		<div onClick={(e) => e.stopPropagation()} className={className}>
			{children}
		</div>
	);
};
