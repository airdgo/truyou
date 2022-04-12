import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export const FriendsStatus = () => {
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
				// borderColor: [
				// 	"rgba(255, 99, 132, 1)",
				// 	"rgba(54, 162, 235, 1)",
				// 	"rgba(255, 206, 86, 1)",
				// 	"rgba(75, 192, 192, 1)",
				// 	"rgba(153, 102, 255, 1)",
				// 	"rgba(255, 159, 64, 1)",
				// ],
				// borderWidth: 1,
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

	// const toggleData = (value) => {
	// 	const visibilityData = isDatasetVisible;
	// 	console.log(visibilityData);
	// };

	return (
		<section>
			<header className="text-neutralDark flex justify-between items-center">
				<div className="text-2xs">Friends emotions status</div>
				<HiOutlineDotsHorizontal className="text-xl cursor-pointer" />
			</header>
			<div className="flex w-full items-center justify-end h-32">
				<div className="max-w-[8rem] ">
					<Doughnut data={data} options={options} />
				</div>

				{/* <button
					className={`bg-[${data.datasets[0].backgroundColor[0]}]`}
					onClick={() => toggleData(0)}
				>
					{data.labels[0]}
				</button>
				<button onClick={() => toggleData(1)}>Sad</button>
				<button onClick={() => toggleData(2)}>Angry</button> */}
			</div>
		</section>
	);
};
