import { FaCircle } from "react-icons/fa";
import { LoveIcon } from "../../Icons/MoodsAndPostsIcons/LoveIcon";

export const PostsAdded = () => {
	return (
		<div className="mt-4 grid min-h-[80%] grid-cols-2 gap-4">
			{/* <div className="relative rounded bg-background p-8 text-primary">
				<div className="mt-4 flex items-center justify-start gap-4">
					<FaCircle className="text-5xl" />
					<p>
						User <strong>is feeling MOOD</strong>
					</p>
				</div>
				<p className="absolute right-0 top-0 mt-8 mr-8 text-sm font-extralight">
					01. 01. 2022
				</p>
				<div className="absolute right-0 mr-8 flex items-center gap-4 text-xs font-light text-neutralDarker">
					<p>John, Doe, Joe and other 3</p>
					<button>
						<LoveIcon />
					</button>
				</div>
				<p className="mt-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim
				</p>
				<div className="mt-4 flex gap-2">
					<div>
						<img
							src={require("./test.jpg")}
							alt="there seems to be a proablem loading your photo"
							className="h-full w-full rounded-xl"
						/>
					</div>
				</div>
			</div> */}
			<div className="relative rounded bg-background p-8 text-primary">
				<div className="mt-4 flex items-center justify-start gap-4">
					<FaCircle className="text-5xl" />
					<p>
						User <strong>is feeling MOOD</strong>
					</p>
				</div>
				<p className="absolute right-0 top-0 mt-8 mr-8 text-sm font-extralight">
					01. 01. 2022
				</p>
				<div className="absolute right-0 mr-8 flex items-center gap-4 text-xs font-light text-neutralDarker">
					<p>John, Doe, Joe and other 3</p>
					<button>
						<LoveIcon />
					</button>
				</div>
				<p className="mt-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim
				</p>
				<div className="mt-4 flex gap-2"></div>
			</div>

			<div className="relative rounded bg-background p-8 text-primary">
				<div className="mt-4 flex items-center justify-start gap-4">
					<FaCircle className="text-5xl" />
					<p>
						User <strong>is feeling MOOD</strong>
					</p>
				</div>
				<p className="absolute right-0 top-0 mt-8 mr-8 text-sm font-extralight">
					01. 01. 2022
				</p>
				<div className="absolute right-0 mr-8 flex items-center gap-4 text-xs font-light text-neutralDarker">
					<p>John, Doe, Joe and other 3</p>
					<button>
						<LoveIcon />
					</button>
				</div>
				<p className="mt-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim
				</p>
				<div className="mt-4 flex gap-2"></div>
			</div>
		</div>
	);
};
