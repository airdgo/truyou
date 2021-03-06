import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormInput } from "../../Components/AuthComponents/FormInput";
import { useForm } from "react-hook-form";
import { Form } from "../../Components/AuthComponents/Form";
import { FormButton } from "../../Components/AuthComponents/FormButton";
import { FormHeader } from "../../Components/AuthComponents/FormHeader";
import { AuthFooter } from "../../Components/AuthComponents/AuthFooter";
import { FormContainer } from "../../Components/AuthComponents/FormContainer";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useAuth } from "../../Authentication/AuthProvider";
import { AuthError } from "../../Components/AuthComponents/AuthError";

export const Login = () => {
	const [passwordShown, setPasswordShown] = useState(false);
	const formInputs = [
		{
			name: "email",
			placeholder: "Email adress",
			type: "email",
			position: "col-span-2",
			errorMessage: "Please provide a valid Email address",
			pattern:
				/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
			required: "Please provide an Email address",
			passwordButton: false,
		},
		{
			name: "password",
			placeholder: "Password",
			type: passwordShown ? "text" : "password",
			position: "col-span-2",
			errorMessage: "Please enter a valid password",
			pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,30}$/,
			required: "Please enter a valid password",
			passwordButton: true,
		},
	];

	const formSchema = Yup.object().shape({
		email: Yup.string()
			.matches(formInputs[0].pattern, formInputs[0].errorMessage)
			.required(formInputs[0].required),
		password: Yup.string()
			.matches(formInputs[1].pattern, formInputs[1].errorMessage)
			.required(formInputs[1].required),
	});

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({ mode: "onChange", resolver: yupResolver(formSchema) });
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { login, updateCurrentUser } = useAuth();
	const [errorMessage, setErrorMessage] = useState("");

	const togglePassword = () => {
		setPasswordShown(!passwordShown);
	};

	async function onSubmit(data) {
		try {
			setErrorMessage("");
			setLoading(true);
			await login(data.email, data.password);
			await updateCurrentUser();
			navigate("/");
		} catch (error) {
			console.log(error.message);
			setErrorMessage(error.message);
		}

		setLoading(false);
	}

	const renderedInputs = formInputs.map((input) => {
		return (
			<FormInput
				key={input.name}
				register={register}
				{...input}
				error={!!errors[input.name]}
				helperText={errors[input.name]?.message}
				showPassword={input.passwordButton}
				togglePassword={togglePassword}
			/>
		);
	});

	return (
		<div className="min-h-screen bg-background font-card">
			<FormContainer>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<FormHeader>Autentification</FormHeader>

					<div className="relative grid w-full grid-cols-2 gap-3">
						{renderedInputs}
						<AuthError message={errorMessage} />
						<FormButton disabled={loading}>Login</FormButton>
					</div>
					<div className="mb-28 text-xs font-light">
						<p>
							Don't have an account?
							<Link
								to="/signup"
								className="ml-1 cursor-pointer font-medium text-primary"
							>
								Sign up!
							</Link>
						</p>
						<p className="mt-1 text-center">
							<Link
								to="/forgot-password-step-1"
								className="cursor-pointer font-medium text-primary"
							>
								Forgot password?
							</Link>
						</p>
					</div>
				</Form>
			</FormContainer>
			<AuthFooter />
		</div>
	);
};
