import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { GenerateLegend } from "./GenerateLegend";

export const FriendsGraphic = () => {
	ChartJS.register(ArcElement, Tooltip, Legend);

	const data = {
		labels: ["Happy", "Sad", "Angry", "Scared", "Surprised", "Disgusted"],
		datasets: [
			{
				label: "# of Votes",
				data: [25, 6, 3, 10, 2, 3],
				backgroundColor: [
					"#FCE303",
					"#0085FF",
					"#F20311",
					"#6CC80A",
					"#0DDCC3",
					"#9B55E5",
				],
				borderColor: [
					"#FCE303",
					"#0085FF",
					"#F20311",
					"#6CC80A",
					"#0DDCC3",
					"#9B55E5",
				],
				borderWidth: 0.5,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
				position: "left",
				labels: {
					usePointStyle: true,
					boxWidth: 6,
				},
			},
		},
	};
	return (
		<div className="flex w-full items-center justify-between min-h-[90%] pr-4">
			<GenerateLegend data={data} />

			<div className="max-w-[8rem]">
				<Doughnut data={data} options={options} />
			</div>
		</div>
	);
};
