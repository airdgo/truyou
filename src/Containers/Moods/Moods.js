import { WeeklyStatus } from "./WeeklyStatus/WeeklyStatus";
import { Section } from "../../Components/Section";
import { PersonalStatus } from "./PersonalStatus/PersonalStatus";
import { FriendsStatus } from "./FriendsStatus/FriendsStatus";

export const Moods = () => {
	return (
		<Section className="grid grid-cols-[2fr_2fr_1.5fr] gap-4">
			<WeeklyStatus />
			<PersonalStatus />
			<FriendsStatus />
		</Section>
	);
};
