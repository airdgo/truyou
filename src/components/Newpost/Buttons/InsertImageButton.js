import { InsertImageIcon } from "../../../icons/MoodsAndPostsIcons/InsertImageIcon";

export const InsertImageButton = ({ onImageChange, ...props }) => {
	return (
		<button {...props}>
			<label for="inputTag">
				<InsertImageIcon className="cursor-pointer fill-background stroke-primary hover:fill-accent hover:stroke-white" />
				<input
					id="inputTag"
					type="file"
					multiple
					accept="image/*"
					onChange={onImageChange}
					className="hidden"
				/>
			</label>
		</button>
	);
};
