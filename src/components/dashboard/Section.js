export const Section = ({ children, className }) => {
	return (
		<section
			className={
				"bg-white rounded-md p-5 font-card font-normal shadow-xl " + className
			}
		>
			{children}
		</section>
	);
};
