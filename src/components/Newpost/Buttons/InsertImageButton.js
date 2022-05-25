import { InsertImageIcon } from "../../../Icons/MoodsAndPostsIcons/InsertImageIcon";

export const InsertImageButton = ({ onImageChange, ...props }) => {
	return (
		<button {...props}>
			<label htmlFor="inputTag">
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
