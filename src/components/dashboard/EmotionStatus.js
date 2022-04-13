import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export const EmotionStatus = () => {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
				position: "top",
			},
		},
	};

	const labels = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const data = {
		labels,
		datasets: [
			{
				label: "Happy",
				data: [65, 59, 80, 81, 56, 55, 40, 60, 43, 22, 80, 75],
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
				tension: 0.2,
			},
			{
				label: "Sad",
				data: [25, 69, 30, 85, 26, 65, 50, 60, 65, 50, 55, 60],
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
				tension: 0.2,
			},
		],
	};

	return (
		<section>
			<header className="text-neutralDark">
				<p className="text-2xs">Emotions personal status</p>
				<h2 className="text-xl font-bold text-primary mt-2">No mood here :(</h2>
			</header>

			<div>{/* <Line options={options} data={data} /> */}</div>
		</section>
	);
};
