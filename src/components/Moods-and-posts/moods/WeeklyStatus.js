export const WeeklyStatus = () => {
	return (
		<section>
			<p className="text-neutralDark text-2xs">Weekly status</p>

			<div className="text-primary mb-10 mt-4">
				<h3 className="text-xl">You don't have a week color yet!</h3>
				<p className="font-light text-2xs">
					Start posting so we could figure out what color is your mood.
				</p>
			</div>

			<div>
				<ul className="flex gap-14">
					<li>
						<p className="text-neutralDark font-light text-2xs">Posts</p>
						<span className="text-primary text-5xl font-semibold">0</span>
					</li>
					<li>
						<p className="text-neutralDark font-light text-2xs">Crypto</p>
						<span className="text-primary text-5xl font-semibold">0</span>
					</li>
					<li>
						<p className="text-neutralDark font-light text-2xs">Friends</p>
						<span className="text-primary text-5xl font-semibold">0</span>
					</li>
				</ul>
			</div>
		</section>
	);
};
