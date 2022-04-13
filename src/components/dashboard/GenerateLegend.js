export const GenerateLegend = ({ data }) => {
	return (
		<ul className="text-neutralDark text-xs font-light">
			{data.labels.map((label, index) => {
				return (
					<li className="flex items-center">
						<span
							className={`w-2 h-2 rounded-full mr-2 bg-[${data.datasets[0].backgroundColor[index]}]`}
						></span>
						{label}
					</li>
				);
			})}
		</ul>
	);
};
