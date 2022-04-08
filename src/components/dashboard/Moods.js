import { Section } from "./Section";

export const Moods = () => {
	return (
		<Section className={"grid grid-cols-3"}>
			<section className="">
				<p className="text-neutralDark font-light text-xs">Weekly status</p>
				<h3 className="text-primary text-xl">
					You don't have a week color yet!
				</h3>
				<p className="text-primary font-light text-xs">
					You should start posting so we could figure out what color is your
					mood.
				</p>
				<div>
					<ul className="flex gap-4">
						<li>
							<p className="text-neutralDark font-light text-xs">
								Posts number
							</p>
							<span className="text-primary text-3xl font-bold">0</span>
						</li>
						<li>
							<p className="text-neutralDark font-light text-xs">Crypto</p>
							<span className="text-primary text-3xl font-bold">0</span>
						</li>
						<li>
							<p className="text-neutralDark font-light text-xs">Friends</p>
							<span className="text-primary text-3xl font-bold">0</span>
						</li>
					</ul>
				</div>
			</section>
			<div className="bg-orange-300">Emotions personal status</div>
			<div className="bg-purple-300">Friends emotions status</div>
		</Section>
	);
};
