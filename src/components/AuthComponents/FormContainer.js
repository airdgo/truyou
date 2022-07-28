import React from "react";

export const FormContainer = ({ children }) => {
	return (
		<div className="relative grid min-h-[95vh] w-full place-items-center bg-gradient-to-r from-[#4765FF] to-[#9B55E5] lg:justify-items-end">
			{children}
		</div>
	);
};
