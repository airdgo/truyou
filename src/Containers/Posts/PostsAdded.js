import { useSelector } from "react-redux";
import { NewPost } from "./NewPost";
import { selectAllPosts } from "../../Features/Posts/postsSlice";

export const PostsAdded = () => {
	const posts = useSelector(selectAllPosts);
	const sortedPosts = posts.slice().sort((x, y) => y.createdAt - x.createdAt);
	const renderedPosts = sortedPosts.map((post) => {
		const props = {
			postId: post.id,
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
