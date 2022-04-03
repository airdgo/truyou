import { Posts } from "./Posts";
export const MoodAndPosts = () => {
	return (
		<div className="grid grid-rows-[1fr_3fr] gap-4 m-4">
			<div className="bg-green-400 rounded-md">Moods</div>
			<Posts />
		</div>
	);
};
