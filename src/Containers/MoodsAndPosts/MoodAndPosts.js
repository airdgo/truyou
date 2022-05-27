import { Moods } from "../Moods/Moods";
import { Posts } from "../Posts/Posts";
export const MoodAndPosts = () => {
	return (
		<section className="grid h-full gap-4">
			<Moods />
			<Posts />
		</section>
	);
};
