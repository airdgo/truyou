import { WeeklyStatus } from "./WeeklyStatus";
import { Section } from "../../Section";
import { PersonalStatus } from "./personal_status/PersonalStatus";
import { FriendsStatus } from "./friends_status/FriendsStatus";

export const Moods = () => {
	return (
		<Section className={"grid grid-cols-[2fr_2fr_1.5fr] gap-4"}>
			<WeeklyStatus />
			<PersonalStatus />
			<FriendsStatus />
		</Section>
	);
};
