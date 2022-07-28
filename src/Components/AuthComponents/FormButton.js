export const FormButton = ({ children, ...props }) => {
	return (
		<button
			className="focus:shadow-outline col-span-2 my-6 w-full cursor-pointer rounded-md bg-gradient-to-r from-[#0DDC79] to-[#0DDCC3] py-1 px-4 font-light text-white focus:outline-none lg:mb-4 lg:py-2 lg:text-sm"
			type="submit"
			{...props}
		>
			{children}
		</button>
	);
};
