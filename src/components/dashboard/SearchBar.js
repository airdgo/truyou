import { SearchIcon } from "../../icons/NavbarIcons/SearchIcon";

export const SearchBar = () => {
	return (
		<form className="w-full max-w-md relative">
			<input
				type="text"
				placeholder="Search by date, post's or whatever you want..."
				className="bg-primaryLight text-white text-[10px] rounded-full placeholder-white py-4 pl-12
							 font-search w-full focus:shadow-outline focus:outline-none appearance-none outline-none"
			/>
			<SearchIcon className="absolute top-3 left-4" />
		</form>
	);
};
