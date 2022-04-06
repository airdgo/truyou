import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormInput } from "./form-components/FormInput";
import { useForm } from "react-hook-form";
import { Form } from "./form-components/Form";
import { FormButton } from "./form-components/FormButton";
import { FormHeader } from "./form-components/FormHeader";
import { AuthFooter } from "./AuthFooter";
import { FormContainer } from "./form-components/FormContainer";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useAuth } from "./AuthProvider";

export const ConfirmSignup = () => {
	const { confirmSignup, emailData } = useAuth();

	let formInputs = [
		{
			name: "code",
			placeholder: "Confirmation code",
			type: "text",
			position: "col-span-2",
			errorMessage: "Please provide a valid code",
			pattern: /[0-9.]+/,
			required: "Please provide a code",
		},
	];

	let formSchema = Yup.object().shape({
		code: Yup.string()
			.matches(formInputs[0].pattern, formInputs[0].errorMessage)
			.required(formInputs[0].required),
	});

	if (!emailData) {
		formInputs = [
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
				name: "code",
				placeholder: "Confirmation code",
				type: "text",
				position: "col-span-2",
				errorMessage: "Please provide a valid code",
				pattern: /[0-9.]+/,
				required: "Please provide a code",
			},
		];

		formSchema = Yup.object().shape({
			email: Yup.string()
				.matches(formInputs[0].pattern, formInputs[0].errorMessage)
				.required(formInputs[0].required),
			code: Yup.string()
				.matches(formInputs[1].pattern, formInputs[1].errorMessage)
				.required(formInputs[1].required),
		});
	}

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({ mode: "onChange", resolver: yupResolver(formSchema) });
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	async function onSubmit(data) {
		try {
			setLoading(true);
			emailData
				? await confirmSignup(emailData, data.code)
				: await confirmSignup(data.email, data.code);
			navigate("/login");
		} catch (error) {
			console.log(error.message);
		}

		setLoading(false);
	}

	return (
		<div className="min-h-screen bg-background font-card">
			<FormContainer>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<FormHeader>Check your email for the confirmation code</FormHeader>

					<div className="grid w-full grid-cols-2 gap-3">
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

						<FormButton disabled={loading}>Register</FormButton>
					</div>
				</Form>
			</FormContainer>
			<AuthFooter />
		</div>
	);
};
