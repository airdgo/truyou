import { FaCircle } from "react-icons/fa";
import { LoveIcon } from "../../Icons/MoodsAndPostsIcons/LoveIcon";
import { useAuth } from "../../Authentication/AuthProvider";
import { useDispatch } from "react-redux";
import { reactionAdded } from "../../Features/Posts/postsSlice";

export const NewPost = (props) => {
	const { mood, date, reactions, message, images, postId } = props;
	const { currentUser } = useAuth();
	const dispatch = useDispatch();

	const renderedImages =
		images[0] &&
		images.map((imageSrc) => (
			<div key={imageSrc.URL} className="max-w-sm">
				<img
					src={imageSrc.URL}
					alt="Something went wrong with your file"
					className="mt-4 rounded-xl"
				/>
			</div>
		));

	return (
		<article className="relative rounded bg-background p-8 text-primary">
			<div className="mt-4 flex items-center justify-start gap-4">
				<FaCircle className="text-5xl" />
				<p>
					{currentUser.attributes.given_name} <strong>is feeling {mood}</strong>
				</p>
			</div>
			<p className="absolute right-0 top-0 mt-8 mr-8 text-sm font-extralight">
				{date}
			</p>
			<div className="absolute right-0 mr-8 flex items-center gap-4 text-xs font-light text-neutralDarker">
				<p>{reactions.length}</p>
				<button onClick={() => dispatch(reactionAdded({ postId: postId }))}>
					<LoveIcon />
				</button>
			</div>
			<p className="mt-8">{message}</p>
			{renderedImages}
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
