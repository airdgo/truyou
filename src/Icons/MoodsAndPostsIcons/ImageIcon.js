export const ImageIcon = (props) => {
	const { width = 173, height = 152, fill = "none", className } = props;
	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox="0 0 173 152"
			fill={fill}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M152.244 1H19.9054C9.46426 1 1 8.42558 1 17.5855V133.684C1 142.844 9.46426 150.27 19.9054 150.27H152.244C162.685 150.27 171.149 142.844 171.149 133.684V17.5855C171.149 8.42558 162.685 1 152.244 1Z"
				stroke="#E5E5E5"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M52.9906 59.0487C60.8215 59.0487 67.1697 53.4795 67.1697 46.6095C67.1697 39.7396 60.8215 34.1704 52.9906 34.1704C45.1597 34.1704 38.8115 39.7396 38.8115 46.6095C38.8115 53.4795 45.1597 59.0487 52.9906 59.0487Z"
				stroke="#E5E5E5"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M171.148 100.511L123.884 59.0476L19.9043 150.268"
				stroke="#E5E5E5"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
