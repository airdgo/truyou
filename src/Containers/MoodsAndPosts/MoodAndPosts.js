import { Moods } from "../Moods/Moods";
import { Posts } from "../Posts/Posts";
export const MoodAndPosts = () => {
	return (
		<section className="grid h-screen grid-rows-[1fr_3fr] gap-4">
			<Moods />
			<Posts />
		</section>
	);
};
