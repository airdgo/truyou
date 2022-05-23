import { FaCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { LoveIcon } from "../../Icons/MoodsAndPostsIcons/LoveIcon";
import { NewPost } from "./NewPost";
import { selectAllPosts } from "../../Features/Posts/postsSlice";

export const PostsAdded = () => {
	const posts = useSelector(selectAllPosts);

	const renderedPosts = posts.map((post) => {
		const props = {
			key: post.id,
			mood: post.mood,
			date: post.date,
			reactions: post.reactions,
			message: post.message,
			images: post.images,
		};

		return <NewPost key={post.id} {...props} />;
	});

	return (
		<div className="mt-4 grid min-h-[80%] auto-rows-min grid-cols-2 gap-4">
			{renderedPosts}
		</div>
	);
};
