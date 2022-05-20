import { ShowPasswordButton } from "./ShowPasswordButton";
import { Validation } from "./Validation";

export const FormInput = ({
	register,
	position,
	name,
	placeholder,
	type,
	error,
	helperText,
	pattern,
	required,
	showPassword,
	togglePassword,
}) => {
	return (
		<div className={`${position} relative`}>
			<input
				className={`${
					error ? "border border-red-400" : "valid:border-green-400"
				} focus:shadow-outline peer w-full appearance-none rounded bg-neutral py-1 px-3 text-sm font-[200] leading-tight text-gray-500 placeholder-[#c4c4c4]
				outline-none valid:border focus:outline-none `}
				{...register(name)}
				required={required}
				type={type}
				placeholder={placeholder}
				pattern={pattern && pattern.toString().replace(/^\/|\/$/g, "")}
			/>

			<ShowPasswordButton
				togglePassword={togglePassword}
				showPassword={showPassword}
			/>

			<Validation error={error} helperText={helperText} />
		</div>
	);
};
