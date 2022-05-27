export const GenerateLegend = ({ data }) => {
	return (
		<ul className="text-neutralDark text-xs font-light">
			{data.labels.map((label, index) => {
				let backgroundColor = data.datasets[0].backgroundColor[index];

				return (
					<li key={index} className="flex items-center">
						<span
							className={`w-2 h-2 rounded-full mr-2`}
							style={{
								backgroundColor: backgroundColor,
							}}
						></span>
						{label}
					</li>
				);
			})}
		</ul>
	);
};
