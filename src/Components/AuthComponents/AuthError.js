export const AuthError = ({ message }) => {
	return message ? (
		<div className="text-xs font-light italic text-red-400 col-span-2">
			{message}
		</div>
	) : null;
};
