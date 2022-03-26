import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormInput } from "./form-components/FormInput";
import { useForm } from "react-hook-form";
import { Form } from "./form-components/Form";
import { PrimaryButton } from "./form-components/PrimaryButton";
import { FormHeader } from "./form-components/FormHeader";
import { AuthFooter } from "./AuthFooter";
import { FormContainer } from "./form-components/FormContainer";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useAuth } from "./AuthProvider";

export const ConfirmSignup = () => {
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
	];

	const formSchema = Yup.object().shape({
		code: Yup.string()
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
	const { confirmSignup, emailData } = useAuth();

	async function onSubmit(data) {
		try {
			setLoading(true);
			await confirmSignup(emailData, data.code);
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

						<PrimaryButton disabled={loading}>Register</PrimaryButton>
					</div>
				</Form>
			</FormContainer>
			<AuthFooter />
		</div>
	);
};
