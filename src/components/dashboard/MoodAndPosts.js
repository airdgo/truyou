import { Moods } from "./Moods";
import { Posts } from "./Posts";
export const MoodAndPosts = () => {
	return (
		<section className="grid grid-rows-[1fr_3fr] gap-4">
			<Moods />
			<Posts />
		</section>
	);
};
