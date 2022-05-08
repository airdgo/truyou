import { ModalContainer } from "./ModalContainer";
import { NextStepIcon } from "../../icons/MoodsAndPostsIcons/NextStepIcon";
import { InsertImageButton } from "./InsertImageButton";
import { InsertTextButton } from "./InsertTextButton";
import { InsertVideoButton } from "./InsertVideoButton";
import { useAuth } from "../authentication/AuthProvider";

export const Step2 = ({ handleClose }) => {
	const { currentUser } = useAuth();
	const userName = currentUser.attributes.given_name;

	return (
		<ModalContainer>
			<div className="mb-12">
				<h1 className="text-4xl font-semibold">
					{userName},{" "}
					<span className=" text-base font-normal">is feeling surprised</span>
				</h1>
			</div>

			<p className="my-8">2. Insert your post</p>

			<button className="absolute right-16 top-10" onClick={handleClose}>
				Close
			</button>
			<div className="flex gap-4">
				<InsertImageButton />
				<InsertTextButton />
				<InsertVideoButton />
			</div>

			<NextStepIcon className="cursor-pointer fill-neutral stroke-neutralDark hover:fill-accent hover:stroke-white" />
		</ModalContainer>
	);
};
