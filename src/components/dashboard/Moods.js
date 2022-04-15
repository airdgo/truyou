import { WeeklyStatus } from "./WeeklyStatus";
import { Section } from "./Section";
import { EmotionStatus } from "./EmotionStatus";
import { FriendsStatus } from "./FriendsStatus";

export const Moods = () => {
	return (
		<Section className={"grid grid-cols-[2fr_2fr_1.5fr] gap-4"}>
			<WeeklyStatus />
			<EmotionStatus />
			<FriendsStatus />
		</Section>
	);
};
