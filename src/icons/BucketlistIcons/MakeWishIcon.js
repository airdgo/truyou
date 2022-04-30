export const MakeWishIcon = (props) => {
	const { height = "69", width = "69", className = "cursor-pointer" } = props;
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 69 69"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<circle cx="34.5" cy="34.5" r="34.5" fill="#F5F5F5" />
			<path
				d="M33.9092 21.0776V49.1816"
				stroke="#E5E5E5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M19.8579 35.1289H47.9619"
				stroke="#E5E5E5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
