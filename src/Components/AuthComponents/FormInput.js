import { ShowPasswordButton } from "./ShowPasswordButton";
import { Validation } from "./Validation";

export const FormInput = (props) => {
	const {
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
	} = props;

	const inputError = error ? "border border-red-400" : "valid:border-green-400";
	const inputClassName =
		"focus:shadow-outline peer w-full appearance-none rounded bg-neutral py-1 px-3 text-sm font-[200] leading-tight text-gray-500 placeholder-[#c4c4c4] outline-none valid:border focus:outline-none " +
		inputError;

	return (
		<div className={"relative " + position}>
			<input
				className={inputClassName}
				{...register(name)}
				required={required}
				type={type}
				placeholder={placeholder}
				pattern={pattern && pattern.toString().replace(/^\/|\/$/g, "")}
			/>

			{showPassword && <ShowPasswordButton togglePassword={togglePassword} />}

			<Validation error={error} helperText={helperText} />
		</div>
	);
};
