import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

export const PersonalGraphic = () => {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Tooltip
	);

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			yAxis: {
				display: false,
			},
			xAxis: {
				ticks: {
					color: "#c4c4c4",
					font: {
						size: 10,
						family: "Poppins",
					},
				},
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
				borderColor: "#FCE303",
				pointRadius: 0,
				tension: 0.2,
			},
			{
				label: "Sad",
				data: [25, 35, 56, 65, 76, 65, 50, 60, 65, 50, 55, 60],
				borderColor: "#0085FF",
				pointRadius: 0,
				tension: 0.2,
			},
		],
	};
	return (
		<div className="max-h-[7rem] mt-4">
			<Line options={options} data={data} />
		</div>
	);
};
