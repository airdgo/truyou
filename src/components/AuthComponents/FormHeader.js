export const FormHeader = ({ children, ...props }) => {
	return (
		<div {...props} className="lg:mt-8 lg:mb-12">
			<h1 className="text-center text-4xl tracking-widest">TRUYOU</h1>
			<p className="text-md mt-7 text-center font-medium lg:mt-6 lg:text-2xl">
				{children}
			</p>
		</div>
	);
};
