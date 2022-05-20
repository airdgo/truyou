import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../../Components/AuthComponents/FormInput";
import { useForm } from "react-hook-form";
import { Form } from "../../Components/AuthComponents/Form";
import { FormButton } from "../../Components/AuthComponents/FormButton";
import { FormHeader } from "../../Components/AuthComponents/FormHeader";
import { AuthFooter } from "../../Components/AuthComponents//AuthFooter";
import { FormContainer } from "../../Components/AuthComponents/FormContainer";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useAuth } from "../../Authentication/AuthProvider";
import { AuthError } from "../../Components/AuthComponents/AuthError";

export const ForgotPasswordStep2 = () => {
	const formSchema = Yup.object().shape({
		code: Yup.string()
			.matches(/[0-9.]+/, "Please provide a valid code")
			.required("Please provide a code"),
		newPassword: Yup.string()
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,30}$/,
				"The password must contain 8 or more characters with a mix of letters, numbers & symbols"
			)
			.required("Please provide a valid password"),
		confirmPassword: Yup.string()
			.required("Please enter a valid password")
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,30}$/,
				"The password must contain 8 or more characters with a mix of letters, numbers & symbols"
			)
			.oneOf([Yup.ref("newPassword")], "Passwords do not match"),
	});

	const {
		handleSubmit,
		register,
		formState: { errors },
		watch,
	} = useForm({ mode: "onChange", resolver: yupResolver(formSchema) });

	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const watchInput = watch("newPassword", "");

	const [passwordShown, setPasswordShown] = useState([
		{ id: 0, showPassword: false },
		{ id: 1, showPassword: false },
	]);

	const formInputs = [
		{
			name: "code",
			placeholder: "Confirmation code",
			type: "text",
			position: "col-span-2",
			errorMessage: "Please provide a valid code",
			pattern: /[0-9.]+/,
			required: "Please provide a code",
		},
		{
			name: "newPassword",
			placeholder: "New password",
			type: passwordShown[0].showPassword ? "text" : "password",
			position: "col-span-2",
			errorMessage:
				"The password must contain 8 or more characters with a mix of letters, numbers & symbols",
			pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,30}$/,
			required: "Please provide a valid password",
			passwordButton: true,
		},
		{
			name: "confirmPassword",
			placeholder: "Confirm new password",
			type: passwordShown[1].showPassword ? "text" : "password",
			position: "col-span-2",
			errorMessage: "Passwords do not match",
			pattern: watchInput,
			required: "Please enter a valid password",
			passwordButton: true,
		},
	];

	const togglePassword = (id) => {
		const newPasswordShown = passwordShown.map((password) => {
			return password.id === id
				? { ...password, showPassword: !password.showPassword }
				: password;
		});

		setPasswordShown(newPasswordShown);
	};
	const [errorMessage, setErrorMessage] = useState("");
	const { resetPassword, emailData } = useAuth();

	async function onSubmit(data) {
		try {
			setErrorMessage("");
			setLoading(true);
			await resetPassword(emailData, data.code, data.confirmPassword);
			navigate("/login");
		} catch (error) {
			setErrorMessage(error.message);
		}

		setLoading(false);
	}

	const renderedInputs = formInputs.map((input, index) => {
		return (
			<FormInput
				key={index}
				register={register}
				{...input}
				error={!!errors[input.name]}
				helperText={errors[input.name]?.message}
				showPassword={input.passwordButton}
				togglePassword={() => togglePassword(index - 1)}
			/>
		);
	});

	return (
		<div className="min-h-screen bg-background font-card">
			<FormContainer>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<FormHeader>Create new password</FormHeader>

					<div className="grid w-full grid-cols-2 gap-3 pb-32">
						{renderedInputs}
						<AuthError message={errorMessage} />
						<FormButton disabled={loading}>Create</FormButton>
					</div>
				</Form>
			</FormContainer>
			<AuthFooter />
		</div>
	);
};
