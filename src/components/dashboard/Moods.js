import { WeeklyStatus } from "./WeeklyStatus";
import { Section } from "./Section";
import { EmotionStatus } from "./EmotionStatus";
import { FriendsStatus } from "./FriendsStatus";

export const Moods = () => {
	return (
		<Section className={"grid grid-cols-3"}>
			<WeeklyStatus />
			<EmotionStatus />
			<FriendsStatus />
		</Section>
	);
};
