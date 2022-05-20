import { PersonalGraphic } from "./PersonalGraphic";

export const PersonalStatus = () => {
	return (
		<section>
			<header className="text-neutralDark">
				<p className="text-2xs">Emotions personal status</p>
				<h2 className="text-xl font-bold text-primary mt-4">No mood here :(</h2>
			</header>

			<PersonalGraphic />
		</section>
	);
};
