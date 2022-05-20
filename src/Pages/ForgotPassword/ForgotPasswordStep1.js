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

export const ForgotPasswordStep1 = () => {
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
	];

	const formSchema = Yup.object().shape({
		email: Yup.string()
			.matches(formInputs[0].pattern, formInputs[0].errorMessage)
			.required(formInputs[0].required),
	});

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({ mode: "onChange", resolver: yupResolver(formSchema) });
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState("");
	const { forgotPassword, setEmail } = useAuth();

	async function onSubmit(data) {
		try {
			setErrorMessage("");
			setLoading(true);
			setEmail(data.email);
			await forgotPassword(data.email);
			navigate("/forgot-password-step-2");
		} catch (error) {
			setErrorMessage(error.message);
		}

		setLoading(false);
	}

	return (
		<div className="min-h-screen bg-background font-card">
			<FormContainer>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<FormHeader>Forgot Password</FormHeader>

					<div className="relative grid w-full grid-cols-2 gap-3">
						{formInputs.map((input, index) => {
							return (
								<FormInput
									key={index}
									register={register}
									{...input}
									error={!!errors[input.name]}
									helperText={errors[input.name]?.message}
								/>
							);
						})}
						<AuthError message={errorMessage} />
						<FormButton disabled={loading}>Reset password</FormButton>
					</div>
				</Form>
			</FormContainer>
			<AuthFooter />
		</div>
	);
};
