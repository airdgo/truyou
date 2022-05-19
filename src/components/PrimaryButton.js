export const PrimaryButton = ({
	children,
	bgColor = "bg-primary",
	...props
}) => {
	return (
		<button
			className={`focus:shadow-outline cursor-pointer rounded-md ${bgColor} py-1 px-4 font-light text-white focus:outline-none lg:py-2 lg:text-sm`}
			{...props}
		>
			{children}
		</button>
	);
};
