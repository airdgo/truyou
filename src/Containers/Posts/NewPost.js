import { FaCircle } from "react-icons/fa";
import { LoveIcon } from "../../Icons/MoodsAndPostsIcons/LoveIcon";
export const NewPost = (props) => {
	const { mood, date, reactions, message, imagePath } = props;

	return (
		<article className="relative rounded bg-background p-8 text-primary">
			<div className="mt-4 flex items-center justify-start gap-4">
				<FaCircle className="text-5xl" />
				<p>
					User <strong>is feeling {mood}</strong>
				</p>
			</div>
			<p className="absolute right-0 top-0 mt-8 mr-8 text-sm font-extralight">
				{date}
			</p>
			<div className="absolute right-0 mr-8 flex items-center gap-4 text-xs font-light text-neutralDarker">
				<p>{reactions}</p>
				<LoveIcon />
			</div>
			<p className="mt-8">{message}</p>
			<img
				src={imagePath}
				alt="there seems to be a proablem loading your file"
				className="mt-4 rounded-xl"
			/>
		</article>
	);
};

NewPost.defaultProps = {
	mood: "mood not selected",
	date: "date not specified",
	reactions: "people that love the post",
	message: "user message",
	imagePath: "image path",
};
